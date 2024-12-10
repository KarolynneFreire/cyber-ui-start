import NavBar from "../../components/NavBar/NavBar";
import { Main } from "./LoginSignup.styles";
import { useState } from "react";
import { api } from "../../config/axios";
import { useNavigate } from "react-router-dom";
import FormComponent from "../../components/FormComponent/FormComponent";
import ResolutionNotAvailable from "../../components/ResolutionNotAvailable/ResolutionNotAvailable";
import { sucessToast, errorToast } from "../../utils/toastify";
import { LoadingSpin } from "../../components/LoadingComponent/LoadingComponent";

export const Login = () => {
  const [isModalOpen, setModalOpen] = useState(true);
  const userEmail = "usuario@exemplo.com";

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new URLSearchParams();
    formData.append("username", e.target.email.value);
    formData.append("password", e.target.senha.value);

    try {
      // Primeira requisição: Login para pegar o token
      const response = await api.post("/v1/api/login", formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      const { access_token } = response.data;

      // Armazenar o token no localStorage
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("email", e.target.email.value);

      // Requisição para pegar o perfil do usuário com o token recebido
      const profileResponse = await api.get("/v1/api/profile", {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      // Armazenar as informações do perfil no localStorage
      const { id, nome, email, avatar, role, notificacoes_ativadas } = profileResponse.data;

      localStorage.setItem("user_id", id);
      localStorage.setItem("user_name", nome);
      localStorage.setItem("user_email", email);
      localStorage.setItem("user_avatar", avatar);
      localStorage.setItem("user_role", role);
      localStorage.setItem("user_notificacoes_ativadas", notificacoes_ativadas);

      sucessToast("Login efetuado com sucesso!");
      console.log("Token armazenado:", access_token);
      console.log("User ID armazenado:", id);

      // Navega para a página de RiskOverview
      navigate("/RiskOverview");

      // Limpa o formulário
      resetForm();

    } catch (error) {
      errorToast("Erro ao logar");
      console.error("Erro ao logar:", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  const resetForm = () => {
    const form = document.querySelector("form");
    if (form) form.reset();
  };

  return (
    <>
      <ResolutionNotAvailable />
      <NavBar />
      <Main>
        {isLoading ? (
          <LoadingSpin />
        ) : (
          <FormComponent
            formType={"login"}  
            onSubmit={handleLoginSubmit}
            isLoading={isLoading}
          />
        )}
      </Main>
    </>
  );
};

export default Login;
