import { NavBarContainer, NavBarContent, Logo, Navigation, BtnLogin, BtnSignup, IconProfile } from './NavBar.styles'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { api } from '../../config/axios'
import { Link } from 'react-router-dom'

const NavBar = ({ onNavClick }) => {
  const [userData, setUserData] = useState(null);

  const token = localStorage.getItem('access_token');

  const getUserData = async () => {
    const token = localStorage.getItem('access_token');
    console.log('Token recuperado:', token);
  
    if (!token) {
      console.error("Token não encontrado. Usuário não está autenticado.");
      return;
    }
  
    try {
      const response = await api.get('/v1/api/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      return response.data;
    } catch (error) {
      console.error("Erro ao acessar rota protegida:", error.response?.data || error.message);
  }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getUserData();
      setUserData(data);
    };

    fetchUserData();
  }, []);


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
                <Link to='/profile'><img src={userData?.avatar} alt="Avatar" /></Link>
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
  onNavClick: PropTypes.func,
}

export default NavBar;
