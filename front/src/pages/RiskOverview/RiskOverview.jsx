import NavBar from "../../components/NavBar/NavBar";
import { FaBell } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Main,
  RiskModal,
  SpaceContent,
  Title,
  TitleGroup,
  TitleNoData,
  ModalBack,
  ModalRiskOverview,
  ModalCloseBtn,
  IconRiskModal,
  NotificationButton,
} from "./RiskOverview.style";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Footer from "../../components/Footer/Footer";
import NotificationModal from "../../components/Modal/NotificationModal";

export const RiskOverview = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [isRiskModalOpen, setIsRiskModalOpen] = useState(false);  // Modal de Vazamento
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false); // Modal de Notificação
  const [noDataMessage, setNoDataMessage] = useState(false);
  const [userEmail, setUserEmail] = useState(localStorage.getItem("user_email"));

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const email = localStorage.getItem("user_email");
    const url = `https://backend-osint.onrender.com/v1/api/vazamentos/procurar/${email}`;

    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const uniqueData = response.data.filter(
          (item, index, self) =>
            index ===
            self.findIndex(
              (t) =>
                t.nome === item.nome &&
                t.dominio_url === item.dominio_url &&
                t.data_vazamento === item.data_vazamento
            )
        );
        setData(uniqueData);
        setLoading(false);
        setNoDataMessage(false);
      })
      .catch((err) => {
        if (err.response && err.response.status === 404) {
          setNoDataMessage(true);
          setData([]);
        } else {
          setError(err);
        }
        setLoading(false);
      });
  }, []);

  // Abre o modal de detalhes do vazamento
  const handleOpenRiskModal = (item) => {
    setModalData(item);
    setIsRiskModalOpen(true);  // Abre o modal de vazamento
  };

  // Fecha o modal de detalhes do vazamento
  const handleCloseRiskModal = () => {
    setIsRiskModalOpen(false);
    setModalData(null);
  };

  // Abre o modal de notificações
  const handleOpenNotificationModal = () => {
    setIsNotificationModalOpen(true);  // Abre o modal de notificações
  };

  // Fecha o modal de notificações
  const handleCloseNotificationModal = () => {
    setIsNotificationModalOpen(false);
  };

  return (
    <>
      <NavBar />
      <Main>
        <SpaceContent>
          {/* Botão de notificação */}
          <NotificationButton onClick={handleOpenNotificationModal}>
            <FaBell size={18} style={{ marginRight: "8px" }} />
            <span>Ativar notificações de novos vazamentos</span>
          </NotificationButton>

          {/* Modal de Notificação */}
          <NotificationModal
            userEmail={userEmail}
            isOpen={isNotificationModalOpen}
            onClose={handleCloseNotificationModal}
          />
          
          {noDataMessage && (
            <TitleNoData style={{ margin: "0% 0% 2% 0%" }}>
              <Title>
                Parabéns! Não há vazamentos encontrados para o seu e-mail!
              </Title>
            </TitleNoData>
          )}

          {!noDataMessage && (
            <>
              <TitleGroup>
                <Title>Dados de Vazamentos</Title>
              </TitleGroup>
              <VerticalTimeline lineColor="#0C6DC8">
                {data &&
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
                      date={new Date(item.data_vazamento).toLocaleDateString("pt-BR")}
                    >
                      <RiskModal onClick={() => handleOpenRiskModal(item)}>
                        <IconRiskModal
                          src={item.image_uri}
                          alt="Imagem do vazamento"
                        />
                        <div>
                          <h1>{item.nome}</h1>
                          {item.dominio_url} <br />
                        </div>
                      </RiskModal>
                    </VerticalTimelineElement>
                  ))}
              </VerticalTimeline>
              <TitleGroup style={{ margin: "0% 0% 2% 0%" }}>
                <Title>Acabou ;)</Title>
              </TitleGroup>
            </>
          )}
        </SpaceContent>

        {/* Modal de Vazamento com animação moderna */}
        {isRiskModalOpen && modalData && (
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
            <strong>Data de Vazamento:</strong> {new Date(modalData.data_vazamento).toLocaleDateString("pt-BR")}
            </p>
            <p>
              <strong>Data de Atualização:</strong> {modalData.data_atualizacao}
            </p>
            <p>
              <strong>Descrição:</strong>
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: modalData.descricao,
              }}
              style={{ color: "white" }}
            />
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
            <ModalCloseBtn onClick={handleCloseRiskModal}>Fechar</ModalCloseBtn>
          </ModalRiskOverview>
        )}

        {isRiskModalOpen && <ModalBack onClick={handleCloseRiskModal} />}
        <Footer />
      </Main>
    </>
  );
};

export default RiskOverview;
