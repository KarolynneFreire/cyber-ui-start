import React, { useState } from "react";
import "./LoginSignup.css";
import AnimatedBackground from './../../components/AnimatedBackground/AnimatedBackground';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="form-container">
      <AnimatedBackground />
      <div className="form-content">
        <h2>{isLogin ? "Login" : "Cadastro"}</h2>
        <form>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" placeholder="Seu Nome" />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="Seu E-mail" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="Sua Senha" />
          </div>
          <button type="submit" className="form-button">
            {isLogin ? "Entrar" : "Cadastrar"}
          </button>
        </form>
        <p className="toggle-text">
          {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}{" "}
          <button onClick={toggleForm}>
            {isLogin ? "Cadastre-se" : "Faça Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;