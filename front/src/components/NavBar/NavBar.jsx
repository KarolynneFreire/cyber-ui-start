import { NavBarContainer, NavBarContent, Logo, Navigation, BtnLogin, BtnSignup, IconProfile } from './NavBar.styles'
import PropTypes from 'prop-types'
// import Images from '../../assets/images'
// import { api } from '../../config/axios'
// import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({ onNavClick }) => {

  const token = localStorage.getItem('token');
  // const {id} = useParams()

  // useEffect(() => {
  //   getProfile()
  // })

  // const getProfile = async () => {
  //   try {
  //     const response = await api.get(`v1/api/usuarios/${id}`);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
    
  // }

  return (
    <>
    <NavBarContainer id='home'>
      <NavBarContent>
          <Link to="/">
            <Logo>CYBER</Logo>
          </Link>
          <Navigation>
          {!token ? (
            <>
            <Link to='/login'>
            <BtnLogin onClick={() => onNavClick('login')}>Entrar</BtnLogin>
          </Link>
          <BtnSignup onClick={() => onNavClick('signup')}>Catastre-se</BtnSignup>
            </>
          ) : (
            <>
              <IconProfile>
                <Link to='/profile'><img src={token} alt="Avatar" /></Link>
              </IconProfile>
            </>
          )}
            
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
