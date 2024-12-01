import NavBar from "../../components/NavBar/NavBar";
import { Main } from "./LoginSignup.styles";
import { useState } from "react";
import { passwordYup } from "../../utils/validation";
import FormComponent from "../../components/FormComponent/FormComponent";
import ResolutionNotAvailable from "../../components/ResolutionNotAvailable/ResolutionNotAvailable";
import NotificationModal from "../../components/Modal/NotificationModal";


export const Login = () => {

  const [isModalOpen, setModalOpen] = useState(true); // Controle do modal
  const userEmail = "usuario@exemplo.com";


  const [isLogin, setIsLogin] = useState(true);
  const [userList, setUserList] = useState({});

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    console.log('dados (login):', data);
    
    // so pra testar o login
    if (!userList[data.email]) {
      console.log("Usuário não encontrado para login.");
    } else {
      console.log("Usuário encontrado:", userList[data.email]);
    }
  }
  //   try {
  //     const response = await axios.post('/', data);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error('Erro ao logar:', error);
  //   } finally {
  //     console.log('finalizado');
  //   }
  // };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    console.log("Dados cadastrados:", data)

    try {
      await passwordYup.validate(data.password);

      if (userList[data.email]) {
        console.log("Erro: Usuário já cadastrado.")
        alert("Erro: Usuário já cadastrado.")
        resetForm()
        return
      }

      setUserList((prevUserList) => ({
        ...prevUserList,
        [data.email]: data,
      }));

      console.log("Usuário cadastrado com sucesso:", data);
      alert("Cadastro realizado com sucesso!");
      resetForm()
      setIsLogin(true);
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      resetForm()
    }


    
  };
  //   try {
  //     const response = await axios.post('/http://127.0.0.1:8000/v1/api/usuarios/', data);
  //     console.log('Cadastro:', response.data);
  //   } catch (error) {
  //     console.error('Erro ao cadastrar:', error);
  //   } finally {
  //     console.log('finalizado');
  //   }
  // };

  const handleNavClick = (formType) => {
    setIsLogin(formType === "login");
    resetForm()
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
        {isLogin ? (
          <FormComponent formType="login" onSubmit={handleLoginSubmit} />
        ) : (
          <FormComponent formType="signup" onSubmit={handleSignupSubmit} />
        )}
      </Main>

    </>
  );
};

export default Login;
