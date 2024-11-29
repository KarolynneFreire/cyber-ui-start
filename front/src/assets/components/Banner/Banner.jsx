import React from "react";
import TypingEffect from "react-typing-effect"; 
import "./Banner.css"; 
import AnimatedBackground from './../AnimatedBackground/AnimatedBackground';

const Banner = () => {
  return (
    <div className="banner-container">
      <AnimatedBackground  /> {/* Fundo animado */}
      
      <div className="banner-content">
        <h1>
          <TypingEffect
            text={[
              "Seus dados estão seguros?.",
              "Seus dados, sua segurança.",
              "Explore o mundo da cibersegurança!",
            ]}
            speed={100}
            eraseSpeed={50}
            typingDelay={500}
            eraseDelay={1500}
          />
        </h1>
        
        <button className="banner-button">
          Saiba mais
        </button>
      </div>
    </div>
  );
};

export default Banner;

