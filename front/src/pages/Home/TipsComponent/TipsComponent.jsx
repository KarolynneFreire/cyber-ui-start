import React, { useState } from "react";
import { CarouselWrapper, CarouselTrack, CarouselSlide, TipCard, TipTitle, TipDescription, Controls, Button, Title } from "./Tips.styles";

const tips = [
  { title: "Use Senhas Fortes", description: "Crie senhas complexas, com letras, números e caracteres especiais. Evite senhas simples como '123456' ou 'password'." },
  { title: "Ative a Autenticação de Dois Fatores", description: "Sempre que possível, ative a autenticação de dois fatores." },
  { title: "Cuidado com Phishing", description: "Desconfie de e-mails ou mensagens pedindo informações pessoais. Nunca clique em links desconhecidos." },
  { title: "Mantenha Seus Softwares Atualizados", description: "Instale sempre as atualizações de segurança para seu sistema operacional, aplicativos e antivírus." },
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






