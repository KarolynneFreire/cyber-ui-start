import NavBar from "../../components/NavBar/NavBar";
import { Main } from "./LoginSignup.styles";
import { useState } from "react";
import { api } from '../../config/axios'
import { useNavigate } from "react-router-dom";
import { passwordYup } from "../../utils/validation";
import FormComponent from "../../components/FormComponent/FormComponent";
import ResolutionNotAvailable from "../../components/ResolutionNotAvailable/ResolutionNotAvailable";
import NotificationModal from "../../components/Modal/NotificationModal";
import { sucessToast, errorToast } from "../../utils/toastify";
import { LoadingSpin } from "../../components/LoadingComponent/LoadingComponent";

export const Login = () => {
  const [isModalOpen, setModalOpen] = useState(true); // Controle do modal
  const userEmail = "usuario@exemplo.com";

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);
    const data = {
      email: formData.get("email"),
      senha: formData.get("senha"),
    };
    // console.log('dados (login):', data);

    try {
      const response = await api.post('v1/api/login', data);
      // console.log(response.data);
      sucessToast('Login efetuado com sucesso!');
      navigate('/');
    } catch (error) {
      errorToast(error);
      console.error('Erro ao logar:', error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      navigate('/');
      sucessToast('Finally');
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);
    const data = {
      nome: formData.get("nome"),
      email: formData.get("email"),
      senha: formData.get("senha"),
    };
    // console.log("Dados cadastrados:", data);

    if (!data.nome || !data.email || !data.senha) {
      setIsLoading(false);
      errorToast('Preencha todos os campos necessários!');
      return;
    }

    try {
      await passwordYup.validate(data.senha);

      const response = await api.post('v1/api/usuarios', data);
      sucessToast('Cadastro realizado!');
      // console.log('Cadastro:', response.data);
    } catch (error) {
      errorToast(error);
      console.error('Erro ao cadastrar:', error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      errorToast('Finally!');
    }
  };

  const handleNavClick = (formType) => {
    setIsLogin(formType === "login");
    resetForm();
  };

  const resetForm = () => {
    const form = document.querySelector("form");
    if (form) form.reset();
  };

  return (
    <>
      <ResolutionNotAvailable />
      <NavBar onNavClick={handleNavClick} />
      <Main>
        {isLoading ? (
          <LoadingSpin />
        ) : (
          <FormComponent
            formType={isLogin ? "login" : "signup"}
            onSubmit={isLogin ? handleLoginSubmit : handleSignupSubmit}
            isLoading={isLoading}
          />
        )}
      </Main>

    </>
  );
};

export default Login;

