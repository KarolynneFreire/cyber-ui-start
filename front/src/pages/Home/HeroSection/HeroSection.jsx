import { Main, Content, Legend, Title } from './HeroSection.styles';
import BtnFindOutMore from '../../../components/Buttons/Buttons';

const HeroSection = () => {
  return (
    <Main>
      <Content>
        <Legend>◦ A sua privacidade merece mais atenção.</Legend>
        <Title>Você sabe onde <br /> seus dados <span>foram parar?</span></Title>
        <BtnFindOutMore />
      </Content>
    </Main>
  );
};

export default HeroSection;


