import React from "react";
import AnimatedBackground from "./assets/components/AnimatedBackground/AnimatedBackground";

function App() {
  return (
    <div>
      <AnimatedBackground />
      {/* Conteúdo do site */}
      <div style={{ position: "relative", zIndex: 2, color: "#fff" }}>
        <h1>Bem-vindo ao meu site!</h1>
      </div>
    </div>
  );
}

export default App;
