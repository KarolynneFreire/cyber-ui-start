import React from "react";
import { Doughnut } from "react-chartjs-2";
import { StatsContainer, SectionTitle, SectionSubTitle, Card, SourceText } from "./AnimatedStats.styles";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(Title, Tooltip, Legend, ArcElement, ChartDataLabels);

const data1 = {
  labels: ["1º e 2º Trimestres", "3º Trimestre"],
  datasets: [
    {
      data: [63.4, 36.6], 
      backgroundColor: ["#357832", "#0C6DC8"],
    },
  ],
};


const data2 = {
  labels: ["Roubo de Contas (2023)", "Outras Fraudes (2023)"],
  datasets: [
    {
      // 60% relacionado ao roubo de contas e 40% para outras fraudes
      data: [60, 40], 
      backgroundColor: ["#0C6DC8", "#357832"],
    },
  ],
};


const data3 = {
  labels: ["Aumento (2024)", "Sem Aumento(2024)"],
  datasets: [
    {
      data: [70, 30],
      backgroundColor: ["#0C6DC8", "#357832"],
    },
  ],
};


const options = {
  plugins: {
    tooltip: {
      callbacks: {
        label: (tooltipItem) => `${tooltipItem.raw}%`,
      },
    },
    datalabels: {
      display: true,
      color: "black",
      formatter: (value) => `${value}%`,
    },
  },
};

const AnimatedStats = () => {
  return (
    <>
    <StatsContainer>
      <SectionTitle>Estatísticas de Vazamentos no Brasil</SectionTitle>

{/* Card 1 */}
<Card
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <SectionSubTitle>Contas Comprometidas</SectionSubTitle>
  <Doughnut data={data1} options={options} />
  <SourceText>Fonte: Surfshark, 2024</SourceText> 
  {/* https://www.poder360.com.br/poder-tech/brasil-teve-137-milhoes-de-contas-on-line-vazadas-em-2024/#:~:text=O%20Brasil%20teve%2013.664.324,(1%2C1%20milh%C3%A3o). */}
</Card>



<Card
   initial={{ opacity: 0, y: 20 }}
   animate={{ opacity: 1, y: 0 }}
   transition={{ duration: 0.8 }}
>
  <SectionSubTitle>Fraudes on-line</SectionSubTitle>
  <Doughnut data={data2} options={options} />
  <SourceText>Fonte: AllowMe, 2023</SourceText>
</Card>



 

      {/* Card 3 */}
      <Card
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <SectionSubTitle>Aumento nos Ataques</SectionSubTitle>
        <Doughnut data={data3} options={options} />
        <SourceText>Fonte: Cisoadvisor, 2024</SourceText> 
        {/* https://www.cisoadvisor.com.br/ataques-crescem-cerca-de-70-no-brasil-em-um-ano/ */}
      </Card>
    </StatsContainer>
  
      
         
         
          </>
    
  );
};

export default AnimatedStats;



