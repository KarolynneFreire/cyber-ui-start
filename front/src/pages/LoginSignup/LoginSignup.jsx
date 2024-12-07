import NavBar from "../../components/NavBar/NavBar";
import { Main } from "./LoginSignup.styles";
import { useState } from "react";
import { api } from '../../config/axios'
import { useNavigate } from "react-router-dom";
import FormComponent from "../../components/FormComponent/FormComponent";
import ResolutionNotAvailable from "../../components/ResolutionNotAvailable/ResolutionNotAvailable";
import NotificationModal from "../../components/Modal/NotificationModal";
import { sucessToast, errorToast } from "../../utils/toastify";
import { LoadingSpin } from "../../components/LoadingComponent/LoadingComponent";

export const Login = () => {
  const [isModalOpen, setModalOpen] = useState(true); // Controle do modal
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
      const response = await api.post("/v1/api/login", formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
  
      const { access_token } = response.data;
      sucessToast("Login efetuado com sucesso!");
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("email", e.target.email.value);
      console.log("Token armazenado:", access_token);
      sucessToast("Login realizado!");
      navigate("/RiskOverview");
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
      <NavBar/>
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
