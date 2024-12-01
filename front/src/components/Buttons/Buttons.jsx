import { Link } from 'react-router-dom'
import { BtnFindOutMoreStyled, BtnVerifiedStyled } from './Buttons.styles'

const BtnFindOutMore = () => {
  return (
    <>
      <Link to='/rota-saiba-mais'>
        <BtnFindOutMoreStyled>Saiba Mais</BtnFindOutMoreStyled>
      </Link>
    </>
  );
};

export const BtnVerified = () => {
  return (
    <>
      <Link to='/rota-de-verificacao'>
        <BtnVerifiedStyled>Verificar</BtnVerifiedStyled>
      </Link>
    </>
  );
};

export default BtnFindOutMore;
