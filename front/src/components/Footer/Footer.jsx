import Images from "../../assets/images";
import {
  FooterContainer,
  FooterContent,
  Content,
  FooterLogo,
  SocialMedia,
  FooterSection,
  FooterItem,
  FooterText,
  FooterTitle,
  FooterBottom,
  FooterLink,
  Contact
} from "../../components/Footer/Footer.styles";
import { TalkToUs } from "../Buttons/Buttons";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Content>
          <FooterSection>

            <FooterItem>
              <a href="#home">
                <FooterLogo>CYBER</FooterLogo>
              </a>
              <FooterText>
                <p>Lorem ipsum dolor consectetursed eiusmod tempor incididuntamagna aliqua jamLorem ipsumaaliqua minim ven.</p>
              </FooterText>
            </FooterItem>

            <FooterItem>
              <FooterTitle>Sobre Nós</FooterTitle>
              <FooterText>
                <p>Lorem ipsum dolor consecteturased eiusmod tempor incididunt magna aliqua. </p>
              </FooterText>
            </FooterItem>

            <FooterItem>
              <FooterTitle>Serviços</FooterTitle>
              <FooterText>
                <p>- Consultoria em Cybersecurity</p>
                <p>- Análise de Vulnerabilidades</p>
                <p>- Educação em Segurança Digital</p>
                {/* Podem por mnais aq se quiser */}
              </FooterText>
            </FooterItem>

            <FooterItem>
              <FooterTitle>Contato</FooterTitle>
              <FooterText>
                <p>Email: .com</p>
                <p>Telefone: +55 81 9 9999-9999</p>
              </FooterText>
            </FooterItem>
          </FooterSection>
        </Content>

        <Contact>
          <SocialMedia>
            <a href="https://www.google.com/"><img src={Images.InstagramLogo} alt="Instagram" /></a>
            <a href="https://www.google.com/"><img src={Images.FacebookLogo} alt="Facebook" /></a>
            <a href="https://www.google.com/"><img src={Images.LinkedinLogo} alt="LinkedIn" /></a>
            <a href="https://www.google.com/"><img src={Images.GithubLogo} alt="GitHub" /></a>
          </SocialMedia>
          <TalkToUs/>
        </Contact>
      <hr />
      </FooterContent>

      <FooterBottom>
        <p>© 2024 CYBER. Todos os direitos reservados.</p>
        <div>
          <FooterLink href="/privacy">Política de Privacidade</FooterLink>
          <FooterLink href="/terms">Termos de Uso</FooterLink>
        </div>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
