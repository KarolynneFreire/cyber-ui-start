import React from "react";
import TypingEffect from "react-typing-effect"; 
import "./Banner.css"; 

const Banner = () => {
  return (
    <div className="banner-container">
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


