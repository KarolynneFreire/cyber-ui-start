import { NavBarContainer, NavBarContent, Logo, Navigation, BtnLogin, BtnSignup } from './NavBar.styles'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const NavBar = ({ onNavClick }) => {
  return (
    <>
    <NavBarContainer>
      <NavBarContent>
          <Link to="/">
            <Logo>CYBER</Logo>
          </Link>
          <Navigation>
            <Link to='/login'>
              <BtnLogin onClick={() => onNavClick('login')}>Entrar</BtnLogin>
            </Link>
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
