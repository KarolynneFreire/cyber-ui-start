import { NavBarContainer, NavBarContent, Logo, Navigation, BtnLogin, BtnSignup, IconProfile, DropDown } from './NavBar.styles'
import { useState, useEffect } from 'react'
import { api } from '../../config/axios'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {
  const [userData, setUserData] = useState(null);
  const [ showDropDown, setShowDropDown ] = useState(false)

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('email');
    navigate('/');

    window.location.reload();
  };

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
            <BtnLogin>Entrar</BtnLogin>
          </Link>
          <Link to='/signup'>
            <BtnSignup>Catastre-se</BtnSignup>
          </Link>
            </>
          ) : (
            <>
              <IconProfile showDropDown={showDropDown}>
                <img src={userData?.avatar} alt="Avatar" />
                <i onClick={() => setShowDropDown(!showDropDown)} className='bx bx-chevron-down'></i>
              </IconProfile>
                {showDropDown && (
                  <DropDown>
                    <li><Link to='/RiskOverview'>Perfil</Link></li>
                    <li onClick={handleLogout}>Sair</li>
                  </DropDown>)}
            </>
          )}
            
            </Navigation>
      </NavBarContent>
    </NavBarContainer>
    </>
  );
};

export default NavBar;
