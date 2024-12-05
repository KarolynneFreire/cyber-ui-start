import { NavBarContainer, NavBarContent, Logo, Navigation, BtnLogin, BtnSignup, IconProfile } from './NavBar.styles';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { api } from '../../config/axios';
import { Link } from 'react-router-dom';

// Cache local para armazenar os dados do usuário
let userCache = null;

const NavBar = ({ onNavClick }) => {
  const [userData, setUserData] = useState(null);

  const token = localStorage.getItem('access_token');
  const email = localStorage.getItem('email');


  const getUserData = async () => {
    // Verifica se o cache já possui os dados do usuário
    if (userCache) {
      console.log("Usando dados do cache.");
      return userCache;
    }

    console.log("Token recuperado:", token);

    if (!token) {
      console.error("Token não encontrado. Usuário não está autenticado.");
      return null;
    }

    try {
      const response = await api.get('/v1/api/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Armazena os dados do usuário no cache
      userCache = response.data;
      console.log("Dados do usuário armazenados no cache:", userCache);
      return response.data;
    } catch (error) {
      console.error("Erro ao acessar rota protegida:", error.response?.data || error.message);
      return null;
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getUserData();
      setUserData(data); // Atualiza o estado com os dados do usuário
    };

    fetchUserData();
  }, []); // Executa apenas uma vez ao montar o componente

  return (
    <>
      <NavBarContainer id="home">
        <NavBarContent>
          <Link to="/">
            <Logo>CYBER</Logo>
          </Link>
          <Navigation>
            {!token ? (
              <>
                <Link to="/login">
                  <BtnLogin onClick={() => onNavClick('login')}>Entrar</BtnLogin>
                </Link>
                <BtnSignup onClick={() => onNavClick('signup')}>Cadastre-se</BtnSignup>
              </>
            ) : (
              <>
                {userData && (
                  <IconProfile>
                    <Link to="/profile">
                      <img src={userData.avatar} alt="Avatar" />
                    </Link>
                  </IconProfile>
                )}
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
};

export default NavBar;
