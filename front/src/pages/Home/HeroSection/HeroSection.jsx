import { Main, Legend, Title } from './HeroSection.styles'
import BtnFindOutMore from '../../../components/Buttons/Buttons';
import 'boxicons'

const HeroSection = () => {
  return (
    <>
      <Main>
          <Legend>◦ Lorem ipsum sit dolor</Legend>
        <Title>Lorem ipsum sit <br /> dolor <span>amet?</span></Title>
        <BtnFindOutMore/>
      </Main>
    </>
  );
};

export default HeroSection;
