import { Form, Btn, IconVisible, Required, OtherOptions, Line, Google, ImgGoogle } from "./FormComponent.styles";
import PropTypes from "prop-types";
import { useState } from "react";
import Images from "../../assets/images.jsx";
import "../../styles/global.css";
import 'boxicons/css/boxicons.min.css';
import { LoadingSpin } from "../LoadingComponent/LoadingComponent";

const FormComponent = ({ formType, onSubmit, isLoading }) => {
  const isLogin = formType === "login";
  const [senha, setSenha] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [senhaRequired, setSenhaRequired] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false,
  });

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSenhaChange = (e) => {
    setSenha(e.target.value)
    const value = e.target.value;
    setSenha(value);

    setSenhaRequired({
      length: value.length >= 8,
      uppercase: /[A-Z]/.test(value),
      lowercase: /[a-z]/.test(value),
      number: /[0-9]/.test(value),
      special: /[!@#$%&*]/.test(value),
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!isLoading) {
      await onSubmit(e);
    }
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      {isLoading ? (
        <LoadingSpin />
      ) : (
        <>
          <h2>{isLogin ? "Login" : "Cadastro"}</h2>

          {!isLogin && (
            <div>
              <label htmlFor="nome">Nome:</label>
              <input type="text" id="nome" name="nome" required />
            </div>
          )}

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="senha">Senha:</label>
          <div style={{ position: 'relative' }}>
        <input
          type={showPassword ? 'text' : 'password'}
          id="senha"
          name="senha"
          value={senha}
          onChange={handleSenhaChange}
          required
        />
        <button
          type="button"
          onClick={handlePasswordVisibility}
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {showPassword ? (
            <IconVisible className='bx bx-hide'></IconVisible>
          ) : (
            <IconVisible className='bx bx-show'></IconVisible>
          )}
        </button>
      </div>

          {!isLogin && (
            <Required>
              <li style={{ color: senhaRequired.length ? "green" : "#626a74" }}>
                Pelo menos 8 caracteres;
              </li>
              <li style={{ color: senhaRequired.uppercase ? "green" : "#626a74" }}>
                Pelo menos 1 letra maiúscula;
              </li>
              <li style={{ color: senhaRequired.lowercase ? "green" : "#626a74" }}>
                Pelo menos 1 letra minúscula;
              </li>
              <li style={{ color: senhaRequired.number ? "green" : "#626a74" }}>
                Pelo menos 1 número;
              </li>
              <li style={{ color: senhaRequired.special ? "green" : "#626a74" }}>
                Pelo menos 1 caractere especial [!@#$%&*]
              </li>
            </Required>
          )}

          <Btn type="submit">{isLogin ? "Entrar" : "Cadastrar"}</Btn>

          {isLogin && (
            <OtherOptions>
              <div>
                <Line />
                <span>ou</span>
                <Line />
              </div>
              <Google>
                <abbr title="Função indisponível">
                  <ImgGoogle src={Images.GoogleLogo} alt="Logo do Google" />
                </abbr>
              </Google>
            </OtherOptions>
          )}
        </>
      )}
    </Form>
  );
};

FormComponent.propTypes = {
  formType: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default FormComponent;
