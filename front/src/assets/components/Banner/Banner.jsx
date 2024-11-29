import React from "react";
import TypingEffect from "react-typing-effect"; 
import "./Banner.css"; 
import AnimatedBackground from './../AnimatedBackground/AnimatedBackground';

const Banner = () => {
  return (
    <div className="banner-container">
      {/* <AnimatedBackground />  */}

      {/* Adiciona a imagem ao lado esquerdo */}
      {/* <img 
        src="https://www.clipartmax.com/png/full/97-970440_atualmente-o-sequencial-%C3%A9-v%C3%A1lido-para-pol%C3%ADcia-militar-imagens-de-duvidas-png.png"
        alt="Cibersegurança" 
        className="banner-image"
      /> */}

      <div className="banner-content">
        <h1>
          <TypingEffect
            text={[
              "Corro Perigo de ter sido hackeado?",
              "Meus dados estão seguros?",
              "Seus dados, sua segurança."
            ]}
            speed={100}
            eraseSpeed={50}
            typingDelay={500}
            eraseDelay={1500}
          />
        </h1>
        <button className="banner-button">Saiba mais</button>
      </div>
    </div>
  );
};

export default Banner;


