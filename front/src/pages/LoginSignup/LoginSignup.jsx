import NavBar from "../../components/NavBar/NavBar";
import { Main } from "./LoginSignup.styles";
import FormComponent from "../../components/FormComponent/FormComponent";
import ResolutionNotAvailable from "../../components/ResolutionNotAvailable/ResolutionNotAvailable";

export const Login = () => {
    const handleLoginSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const data = {
            email: formData.get('email'),
            password: formData.get('password')
        }
        console.log(data)
    }
  return <>
    <ResolutionNotAvailable/>
  <NavBar/>
  <Main>
  <FormComponent formType="login" onSubmit={handleLoginSubmit} />
  </Main>
  </>

};

export const SignupPage = () => {
    const handleSignupSubimit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
        }
        console.log('Dados cadastrados:', data)
    }
  return <FormComponent formType="signup" onSubmit={handleSignupSubimit}/>;
};


export default Login;
