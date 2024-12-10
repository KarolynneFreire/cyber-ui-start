import { Main, Content, Legend, Title } from './HeroSection.styles';
import BtnFindOutMore from '../../../components/Buttons/Buttons';
import LoadingComponentInitial from '../../../components/LoadingComponent/LoadingComponent';
import { useState, useEffect } from 'react';
import 'boxicons'

const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000)
  useEffect(() => {

  }, []);
  return (
    <>
      <Main>
      <Content>
        <LoadingComponentInitial isLoading={isLoading} />
            <Legend>◦ A sua privacidade merece mais atenção</Legend>
            <Title>Você sabe onde <br /> seus dados <span>foram parar?</span></Title>
          <BtnFindOutMore/>
      </Content>
      </Main>
    </>
  );
};

export default HeroSection;


