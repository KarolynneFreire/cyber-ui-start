import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { api } from "../../config/axios";
import {
  Page,
  MainContainer,
  UserProfileContent,
  Profile,
  UserImage,
  Photo,
  Line,
  About,
  NameProfile,
  Span,
  Icon,
  Info,
  MainContent,
  UserProfileContainer,
  GroupSquare,
  Square,
  Graphics,
  P,
} from './Profile.styles.js';
import ResolutionNotAvailable from "../../components/ResolutionNotAvailable/ResolutionNotAvailable.jsx";
import { LoadingInitial,  Logo } from "../../components/LoadingComponent/LoadingComponent.styles.js";


const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [leaks, setLeaks] = useState([]); // Armazena os vazamentos do usuário
  const [loadingLeaks, setLoadingLeaks] = useState(true); // Para exibir o carregamento
  const groupSquareRef = useRef(null); // Referência para o container do conteúdo

  const fetchUserData = async () => {
    const token = localStorage.getItem('access_token');
    if (!token) return;

    try {
      const response = await api.get('/v1/api/profile', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUserData(response.data);
      setNotificationsEnabled(response.data.notificacoes_ativadas);
      fetchUserLeaks(response.data.email); // Chama a API de vazamentos com o e-mail do usuário
    } catch (error) {
      console.error("Erro ao buscar dados do usuário:", error.response?.data || error.message);
    }
  };

  const fetchUserLeaks = async (email) => {
    const token = localStorage.getItem('access_token');
    try {
      const response = await api.get(`/v1/api/vazamentos/procurar/${email}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setLeaks(response.data); // Salva os vazamentos encontrados
    } catch (error) {
      console.error("Erro ao buscar vazamentos:", error.response?.data || error.message);
      setLeaks([]); // Garante que vazamentos fique vazio em caso de erro
    } finally {
      setLoadingLeaks(false); // Para o indicador de carregamento
    }
  };

  const handleCheckboxChange = async () => {
    const token = localStorage.getItem('access_token');
    if (!userData) return;

    try {
      const updatedState = !notificationsEnabled;

      await api.patch(
        `/v1/api/usuarios/${userData.id}`,
        { notificacoes_ativadas: updatedState },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setNotificationsEnabled(updatedState);
    } catch (error) {
      console.error("Erro ao atualizar notificações:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (!userData) {
    return <LoadingInitial>
      <Logo>CYBER</Logo>
    </LoadingInitial>;
  }

  return (
    <>
      <Page>
        <NavBar />
        <ResolutionNotAvailable />
        <MainContainer>
          <UserProfileContent>
            <Profile>
              <UserImage>
                <Photo src={userData.avatar} alt="Foto do usuário" />
              </UserImage>
              <About>
                <Span>
                  <NameProfile>{userData.nome}</NameProfile>
                  <Icon className="bx bxs-check-circle" style={{ color: "#73a66f" }}></Icon>
                </Span>
                <Info>
                  <i className="bx bx-envelope" style={{ color: "#A0A0A0", marginRight: "8px" }}></i>
                  {userData.email}
                </Info>
                <div style={{ marginTop: "16px" }}>
                  <label>
                    <input
                      type="checkbox"
                      checked={notificationsEnabled}
                      onChange={handleCheckboxChange}
                      style={{ marginRight: "8px" }}
                    />
                    Notificação de novos vazamentos
                  </label>
                </div>
              </About>
            </Profile>
            <Line />
          </UserProfileContent>
        </MainContainer>
        <MainContent>
          <h2 style={{ color: 'white', marginBottom: "20px" }}>Vazamentos</h2> {/* Título dos Vazamentos */}
          <UserProfileContainer>
            <GroupSquare ref={groupSquareRef}>
              {loadingLeaks ? (
                <p style={{ color: 'white' }}>Carregando vazamentos...</p>
              ) : leaks.length > 0 ? (
                leaks.map((leak) => (
                  <Square
                    key={leak.id}
                    onClick={() => {
                      const url = leak.dominio_url.startsWith('http') ? leak.dominio_url : `https://${leak.dominio_url}`;
                      window.open(url, "_blank");  // Abre o domínio completo com protocolo
                    }}
                    style={{ cursor: 'pointer' }}  // Cursor de clique para indicar que é interativo
                  >
                    <Graphics>{leak.titulo}</Graphics>
                    <img src={leak.image_uri} alt={leak.titulo} width={50} />
                    <P style={{ color: 'white' }}>
                      {new Date(leak.data_vazamento).toLocaleDateString('pt-BR')}
                    </P>
                  </Square>
                ))
              ) : (
                <P style={{ color: 'white' }}>Parabéns! Não há vazamentos na sua conta.</P>
              )}
            </GroupSquare>
          </UserProfileContainer>
        </MainContent>
      </Page>
      <Footer />
    </>
  );
};

export default UserProfile;
