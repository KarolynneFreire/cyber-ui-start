import Images from '../../../assets/images'
import { Legend } from '../HeroSection/HeroSection.styles'
import { Section, SectionContent, ImgContainer, AboutUs, Title, Description } from './MainSection.styles'
import { BtnVerified } from '../../../components/Buttons/Buttons'

const MainSection = () => {
  return (
    <>
    <Section>
        <SectionContent>
            <ImgContainer>
                <img src={Images.AboutUs} alt="Sobre nós" />
            </ImgContainer>
            <AboutUs>
                <Legend>◦ Lorem ipsum sit dolor</Legend>
                        <Title>Quem somos?</Title>
                        <Description>Ajudamos você a proteger sua privacidade e segurança digital.</Description>
                        <Description>Nosso sistema verifica onde seus dados podem ter sido <br />
                         expostos e fornece informações sobre possíveis vazamentos.</Description>
                        <BtnVerified/>
            </AboutUs>
        </SectionContent>
    </Section>
    </>
  );
};

export default MainSection;
