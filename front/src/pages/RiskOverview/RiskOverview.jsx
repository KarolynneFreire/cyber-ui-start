import NavBar from "../../components/NavBar/NavBar";
import {
  Main,
  RiskModal,
  SpaceContent,
  Title,
  TitleGroup,
  ModalBack,
  ModalRiskOverview,
  ModalCloseBtn,
} from "./RiskOverview.style";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const RiskOverview = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalData, setModalData] = useState(null); // Para armazenar os dados do modal
  const [isModalOpen, setIsModalOpen] = useState(false); // Controle do modal

  useEffect(() => {
    try {
      const email = localStorage.getItem("email");
      const token = localStorage.getItem("access_token");
  
      const url = `https://backend-osint.onrender.com/v1/api/vazamentos/procurar/${email}`;
  
      console.log(email)

      axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setData(response.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Erro na requisição:", err);
          setError(err);
          setLoading(false);
        });
    } catch (err) {
      console.error("Erro no Local Storage:", err);
      setError(err);
      setLoading(false);
    }
  }, []);
  
  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Ocorreu um erro: {error.message}</div>;
  }

  const handleOpenModal = (item) => {
    setModalData(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  return (
    <>
      <NavBar />
      <Main>
        <SpaceContent>
          <TitleGroup>
            <Title>Usuario</Title>
            <Title>Dados de Vazamentos</Title>
          </TitleGroup>
          <VerticalTimeline lineColor="#0C6DC8">
            {data &&
              data.map((item, index) => (
                <VerticalTimelineElement
                  iconStyle={{ backgroundColor: "#0C6DC8", boxShadow: "none" }}
                  contentStyle={{
                    backgroundColor: "transparent",
                    color: "white",
                    padding: "10px",
                  }}
                  contentArrowStyle={{ top: "25%" }}
                  date={item.data_vazamento}
                >
                  <RiskModal key={index} onClick={() => handleOpenModal(item)}>
                    <h1>{item.nome}</h1>
                    {item.dominio_url} <br />
                  </RiskModal>
                </VerticalTimelineElement>
              ))}
          </VerticalTimeline>
        </SpaceContent>
        {isModalOpen && modalData && (
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
      </Main>
    </>
  );
};

export default RiskOverview;
