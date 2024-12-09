import NavBar from "../../components/NavBar/NavBar"; // Importa o componente NavBar para exibir na página
import { 
  Main, RiskModal, SpaceContent, Title, TitleGroup, TitleNoData, 
  ModalBack, ModalRiskOverview, ModalCloseBtn, IconRiskModal 
} from "./RiskOverview.style"; // Importa os componentes de estilo personalizados
import { useState, useEffect } from "react"; // Importa hooks do React
import axios from "axios"; // Importa a biblioteca axios para fazer requisições HTTP
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"; // Importa componentes para exibir uma linha do tempo vertical
import "react-vertical-timeline-component/style.min.css"; // Importa o estilo do componente de linha do tempo
import Footer from "../../components/Footer/Footer"; // Importa o componente Footer
import NotificationModal from "../../components/Modal/NotificationModal"; // Importa o componente de modal de notificação

export const RiskOverview = () => { // Define o componente funcional 'RiskOverview'
  const [data, setData] = useState(null); // Estado para armazenar dados dos vazamentos
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
  const [error, setError] = useState(null); // Estado para armazenar erros
  const [modalData, setModalData] = useState(null); // Estado para armazenar dados do modal
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar a abertura do modal
  const [noDataMessage, setNoDataMessage] = useState(false); // Estado para controlar a exibição de mensagem de ausência de dados

  useEffect(() => { // Hook que é executado quando o componente é montado
    const token = localStorage.getItem("access_token"); // Pega o token de acesso do localStorage
    const email = localStorage.getItem("email"); // Pega o email do localStorage

    const url = `https://backend-osint.onrender.com/v1/api/vazamentos/procurar/${email}`; // Define a URL da API para buscar vazamentos

    axios // Faz a requisição GET com o axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`, // Inclui o token no cabeçalho da requisição
        },
      })
      .then((response) => { // Quando a requisição for bem-sucedida
        const uniqueData = response.data.filter( // Filtra dados duplicados
          (item, index, self) =>
            index ===
            self.findIndex(
              (t) =>
                t.nome === item.nome &&
                t.dominio_url === item.dominio_url &&
                t.data_vazamento === item.data_vazamento
            )
        );
        setData(uniqueData); // Atualiza os dados com os dados filtrados
        setLoading(false); // Define o estado de loading como falso
        setNoDataMessage(false); // Define a mensagem de ausência de dados como falsa
      })
      .catch((err) => { // Se houver erro na requisição
        if (err.response && err.response.status === 404) { // Se o erro for 404
          setNoDataMessage(true); // Ativa a mensagem de "Parabéns, não há vazamentos"
          setData([]); // Define os dados como um array vazio
        } else {
          setError(err); // Armazena o erro
        }
        setLoading(false); // Define o estado de loading como falso
      });
  }, []); // O array vazio garante que o useEffect execute apenas uma vez, quando o componente for montado

  const handleOpenModal = (item) => { // Função para abrir o modal com os dados do item
    setModalData(item); // Define os dados do item no estado 'modalData'
    setIsModalOpen(true); // Abre o modal
  };

  const handleCloseModal = () => { // Função para fechar o modal
    setIsModalOpen(false); // Fecha o modal
    setModalData(null); // Limpa os dados do modal
  };

  return (
    <>
      <NavBar /> {/* Exibe a barra de navegação*/}
      <Main> 
        <SpaceContent> 
          <NotificationModal /> {/*// Exibe o modal de notificação*/}
          {noDataMessage && ( // Exibe a mensagem de parabéns se 'noDataMessage' for verdadeiro
            <TitleNoData style={{ margin: "0% 0% 2% 0%" }}>
              <Title>
                Parabéns! Não há vazamentos encontrados para o seu e-mail!
              </Title>
            </TitleNoData>
          )}
          {!noDataMessage && ( // Exibe os dados de vazamento se não houver a mensagem de "sem dados"
            <>
              <TitleGroup>
                <Title>Dados de Vazamentos</Title> 
              </TitleGroup>
              <VerticalTimeline lineColor="#0C6DC8"> 
                {data && // Se 'data' estiver disponível, mapeia os dados
                  data.map((item, index) => (
                    <VerticalTimelineElement
                      key={index}
                      iconStyle={{
                        backgroundColor: "#0C6DC8",
                        boxShadow: "none",
                      }}
                      contentStyle={{
                        backgroundColor: "transparent",
                        color: "white",
                        padding: "10px",
                      }}
                      contentArrowStyle={{ top: "25%" }}
                      date={item.data_vazamento} // Exibe a data do vazamento
                    >
                      <RiskModal onClick={() => handleOpenModal(item)}> 
                        <IconRiskModal 
                          src={item.image_uri} 
                          alt="Imagem do vazamento" 
                        />
                        <div>
                          <h1>{item.nome}</h1> {/* Exibe o nome do vazamento */}
                          {item.dominio_url} <br /> {/* Exibe o domínio URL */}
                        </div>
                      </RiskModal>
                    </VerticalTimelineElement>
                  ))}
              </VerticalTimeline>
              <TitleGroup style={{ margin: "0% 0% 2% 0%" }}>
                <Title>Acabou ;)</Title> {/* Exibe uma mensagem quando todos os dados são carregados */}
              </TitleGroup>
            </>
          )}
        </SpaceContent>
        {isModalOpen && modalData && ( // Se o modal estiver aberto e houver dados, exibe os detalhes
          <ModalRiskOverview>
            <h2>Detalhes do Vazamento</h2>
            <p>
              <strong>Nome:</strong> {modalData.nome}
            </p>
            <p>
              <strong>Titulo:</strong> {modalData.titulo}
            </p>
            <p>
              <strong>Domínio:</strong> {modalData.dominio_url}
            </p>
            <p>
              <strong>Data de Vazamento:</strong> {modalData.data_vazamento}
            </p>
            <p>
              <strong>Data de Atualização:</strong> {modalData.data_atualizacao}
            </p>
            <p>
              <strong>Descricao:</strong> {modalData.descricao}
            </p>
            <p>
              <strong>Dados Vazados:</strong>
            </p>
            <ul>
              {modalData.data_classes && modalData.data_classes.length > 0 ? (
                modalData.data_classes.map((item, index) => (
                  <li key={index}>{item}</li> 
                ))
              ) : (
                <li>Nenhum dado disponível</li>
              )}
            </ul>
            <ModalCloseBtn onClick={handleCloseModal}>Fechar</ModalCloseBtn>
          </ModalRiskOverview>
        )}
        {isModalOpen && <ModalBack onClick={handleCloseModal} />} 
        <Footer /> {/* Exibe o rodapé */}
      </Main>
    </>
  );
};

export default RiskOverview; // Exporta o componente para ser usado em outras partes do aplicativo
