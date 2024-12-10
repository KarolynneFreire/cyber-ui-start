import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../config/axios";
import { passwordYup } from "../../utils/validation";
import FormComponent from "../../components/FormComponent/FormComponent";
import NavBar from "../../components/NavBar/NavBar";
import { Main } from "./Signup.styles.js";
import ResolutionNotAvailable from "../../components/ResolutionNotAvailable/ResolutionNotAvailable";
import NotificationModal from "../../components/Modal/NotificationModal";
import { sucessToast, errorToast } from "../../utils/toastify";
import { LoadingSpin } from "../../components/LoadingComponent/LoadingComponent";

const Signup = () => {

    const [isLoading, setIsLoading] = useState(false);
  
    const navigate = useNavigate();

    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
    
        const formData = new FormData(e.target);
        const data = {
          nome: formData.get("nome"),
          email: formData.get("email"),
          senha: formData.get("senha"),
        };
        console.log("Dados cadastrados:", data);
    
        if (!data.nome || !data.email || !data.senha) {
          setIsLoading(false);
          errorToast("Preencha todos os campos necessários!");
          return;
        }
    
        try {
          await passwordYup.validate(data.senha);
        
          const response = await api.post("/v1/api/usuarios/", data);
          sucessToast("Cadastro realizado!");
          console.log("Cadastro:", response.data);
          localStorage.setItem("token", response.data.avatar);
          resetForm();
          navigate("/login");
        } catch (error) {
    
          if (error.response && error.response.status === 422) {
            const message = error.response.data?.detail || "Erro desconhecido ao cadastrar.";
            errorToast(message); 
          } else {
            
            errorToast("Erro ao cadastrar. Verifique sua conexão ou tente novamente.");
          }
          console.error("Erro ao cadastrar:", error);
        } finally {
          setTimeout(() => {
            setIsLoading(false);
          }, 2000);
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
            formType={"signup"}
            onSubmit={handleSignupSubmit}
            isLoading={isLoading}
          />
        )}
      </Main>

    </>
  );
};

export default Signup;
