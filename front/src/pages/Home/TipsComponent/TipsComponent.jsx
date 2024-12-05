import React, { useState } from "react";
import { CarouselWrapper, CarouselTrack, CarouselSlide, TipCard, TipTitle, TipDescription, Controls, Button, Title } from "./Tips.styles";

const tips = [
  { title: "Faça Backup Regularmente", description: "Faça backups de seus arquivos mais importantes.Em caso de falha no sistema ou ataque de ransomware, você poderá restaurar seus dados." },
  { title: "Desative Contas Antigas ou Inativas", description: "Se você não usa mais uma conta, desative-a. Isso ajuda a reduzir os pontos de acesso ao seu perfil e evita que pessoas mal-intencionadas usem contas esquecidas." },
  { title: "Cuidado com Phishing", description: "Desconfie de e-mails ou mensagens pedindo informações pessoais. Nunca clique em links desconhecidos." },
  { title: "Cuidado com Redes Wi-Fi Públicas", description: "Evite fazer transações sensíveis, como acessos bancários ou compras online, enquanto estiver conectado a uma rede Wi-Fi pública." },
  { title: "Monitore Suas Contas", description: "Revise regularmente suas contas bancárias e de cartões de crédito para detectar atividades suspeitas." },
  { title: "Use Senhas Únicas para Cada Conta", description: "Evite usar a mesma senha para várias contas." },
  { title: "Desconfie de E-mails e Mensagens Suspeitas", description: "Não clique em links ou baixe arquivos de fontes desconhecidas." },
];


const TipsComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 4;
  const totalSlides = Math.ceil(tips.length / visibleCards);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <CarouselWrapper>
      <Title>Dicas de Segurança</Title>
      <CarouselTrack currentIndex={currentIndex} visibleCards={visibleCards}>
        {tips.map((tip, index) => (
          <CarouselSlide key={index} visibleCards={visibleCards}>
            <TipCard>
              <TipTitle>{tip.title}</TipTitle>
              <TipDescription>{tip.description}</TipDescription>
            </TipCard>
          </CarouselSlide>
        ))}
      </CarouselTrack>
      <Controls>
        <Button onClick={handlePrev}>{"<"}</Button>
        <Button onClick={handleNext}>{">"}</Button>
      </Controls>
    </CarouselWrapper>
  );
};

export default TipsComponent;






