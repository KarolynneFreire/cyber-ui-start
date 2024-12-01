import { NavBarContainer, NavBarContent, Logo, Navigation, BtnLogin, BtnSignup } from './NavBar.styles'
import PropTypes from 'prop-types'

const NavBar = ({ onNavClick }) => {
  return (
    <>
    <NavBarContainer>
      <NavBarContent>
          <Logo>CYBER</Logo>
          <Navigation>
            <BtnLogin onClick={() => onNavClick('login')}>Entrar</BtnLogin>
            <BtnSignup onClick={() => onNavClick('signup')}>Catastre-se</BtnSignup>
            </Navigation>
      </NavBarContent>
    </NavBarContainer>
    </>
  );
};

NavBar.propTypes = {
  onNavClick: PropTypes.func.isRequired,
}

export default NavBar;
