import { BannerContent, Item, BannerContentTeam, Team } from "./Banners.styles";
import { BtnExploreTeam } from "../Buttons/Buttons";
import Images from "../../assets/images";

const BannerContainer = () => {
  return (
    <>
      <BannerContent>
        <Item>
            <img src={Images.Lock} alt="" />
            <p>Evite senhas óbvias. Combine letras, números e caracteres especiais.</p>
        </Item>
        <Item>
            <img src={Images.Auth} alt="" />
            <p>Habilite a Autenticação de Dois Fatores.</p>
        </Item>
        <Item>
            <img src={Images.Link} alt="" />
            <p>Não clique em links desconhecidos ou que pareçam suspeitos.</p>
        </Item>
      </BannerContent>
    </>
  );
};

export const BannerTeam = () => {
  return (
    <>
      <BannerContentTeam>
        <img src={Images.Team} alt="Conheça a equipe" />
        <Team>
        <p>◦ Lorem ipsum sit dolor</p>
            <h3>Conheça a equipe</h3>
            <BtnExploreTeam/>
        </Team>
      </BannerContentTeam>
    </>
  );
};

export default BannerContainer;
