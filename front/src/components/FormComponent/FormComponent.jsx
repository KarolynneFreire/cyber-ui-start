import { Form, Btn, Required, OtherOptions, Line, Google, ImgGoogle } from "./FormComponent.styles";
import PropTypes from 'prop-types'
import { useState } from 'react'
import Images from '../../assets/images.jsx'
import '../../styles/global.css'

const FormComponent = ({ formType, onSubmit}) => {
  const isLogin = formType === 'login';
  const [password, setPassword] = useState('');
  const [passwordRequired, setPasswordRequired] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false
  });

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    setPasswordRequired({
      length: value.length >= 8,
      uppercase: /[A-Z]/.test(value),
      lowercase: /[a-z]/.test(value),
      number: /[0-9]/.test(value),
      special: /[!@#$%&*]/.test(value)
    });
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <h2>{isLogin ? "Login" : "Cadastro"}</h2>

        {!isLogin && (
          <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" required />
          </div>
        )}
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} required />

        {!isLogin && (
          <Required>
            <li style={{ color: passwordRequired.length ? 'green' : '#626a74' }}>
            Pelo menos 8 caracteres;
          </li>
          <li style={{ color: passwordRequired.uppercase ? 'green' : '#626a74' }}>
            Pelo menos 1 letra maiúscula;
          </li>
          <li style={{ color: passwordRequired.lowercase ? 'green' : '#626a74' }}>
            Pelo menos 1 letra minúscula;
          </li>
          <li style={{ color: passwordRequired.number ? 'green' : '#626a74' }}>
            Pelo menos 1 número;
          </li>
          <li style={{ color: passwordRequired.special ? 'green' : '#626a74' }}>
            Pelo menos 1 caractere especial [!@#$%&*]
          </li>
            </Required>
          )}

        <Btn type="submit">{isLogin ? "Entrar" : "Cadastrar"}</Btn>

        {isLogin && (
          <OtherOptions>
            <div>
              <Line/>
              <span>ou</span>
              <Line/>
            </div>
            <Google>
              <ImgGoogle src={Images.GoogleLogo} alt="Logo do Google" />
            </Google>
            {/* aqui vai ficar o entrar com o google */}
          </OtherOptions>
        )}

        
      </Form>
    </>
  );
}

FormComponent.propTypes = {
  formType: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FormComponent;
