import { Link } from 'react-router-dom'
import { BtnFindOutMoreStyled, BtnVerifiedStyled, TalkToUsStyled } from './Buttons.styles'
import 'boxicons/css/boxicons.min.css';

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

  const token = localStorage.getItem('token');

  return (
    <>
      {!token ? (
            <>
            <Link to='/login'>
        <BtnVerifiedStyled>Verificar</BtnVerifiedStyled>
      </Link>
            </>
          ) : (
            <>
              <Link to='/tela-de-Edberto'>
                <BtnVerifiedStyled>Verificar</BtnVerifiedStyled>
            </Link>
            </>
          )}
    </>
  );
};

export const TalkToUs = () => {
  return (
    <>
      <Link to='/rota-fale-conosco'>
        <TalkToUsStyled>Fale conosco
        <i className='bx bx-send'></i>
        </TalkToUsStyled>
      </Link>
    </>
  );
};

export default BtnFindOutMore;
