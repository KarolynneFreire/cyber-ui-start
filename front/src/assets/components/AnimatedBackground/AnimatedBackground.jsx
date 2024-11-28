import React from "react";
import { motion } from "framer-motion";
import "./AnimatedBackground.css";

const particles = Array.from({ length: 100 }, () => ({
  value: Math.random() > 0.5 ? "0" : "1", // Alterna entre 0 e 1
  size: Math.random() * 3 + 1, // Variação de tamanho
}));

const AnimatedBackground = () => {
  return (
    <div className="binary-background">
      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="binary-particle"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            y: [Math.random() * window.innerHeight, window.innerHeight], // Movendo para baixo
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 8 + 3, // Tempo aleatório
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ fontSize: `${particle.size}rem` }} // Tamanho variável
        >
          {particle.value}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedBackground;

