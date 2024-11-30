import { Form } from "./FormComponent.styles";
import PropTypes from 'prop-types'
import '../../styles/global.css'

const FormComponent = ({ formType, onSubmit}) => {
    const isLogin = formType === 'login';

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
        <input type="password" id="password" name="password" required />

        <button type="submit">{isLogin ? "Entrar" : "Cadastrar"}</button>

        {!isLogin && (
          <div>
            <p></p>
            {/* aqui vai ficar o entrar com o google */}
          </div>
        )}
      </Form>
    </>
  );
};

FormComponent.propTypes = {
  formType: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FormComponent;
