import styled from "styled-components";
import { motion } from "framer-motion";

// Container principal
export const StatsContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  gap: 20px;
  flex-wrap: wrap;
`;

// Título da seção
export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: var(--text-color);
  text-align: center;
  margin-bottom: 30px;
  width: 100%;
`;

// Subtítulo da seção
export const SectionSubTitle = styled.h3`
background: var(--third-color);
-webkit-background-clip: text; 
color: transparent;
  text-align: center;
  width: 100%;
`;

// Cartão
export const Card = styled(motion.div)`
  width: 300px;
  background-color: var(--primary-color);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SourceText = styled.p`
  font-size: 12px;
  color: #6c757d;
  margin-top: 10px;
  text-align: center;
`;
