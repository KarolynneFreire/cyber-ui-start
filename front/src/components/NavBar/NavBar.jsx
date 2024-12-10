import { NavBarContainer, NavBarContent, Logo, Navigation, BtnLogin, BtnSignup, IconProfile, DropDown } from './NavBar.styles'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {
  const [userData, setUserData] = useState(null);
  const [showDropDown, setShowDropDown] = useState(false);
  const navigate = useNavigate();

  // Função de logout que limpa todos os dados do localStorage e redireciona para a página inicial
  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_email');
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_name');
    localStorage.removeItem('user_avatar');
    localStorage.removeItem('user_role');
    localStorage.removeItem('user_notificacoes_ativadas');
    navigate('/');
    window.location.reload(); // Recarrega a página para garantir que a NavBar seja atualizada
  };

  // Carregar os dados do usuário do localStorage ao iniciar
  useEffect(() => {
    const storedUserData = {
      avatar: localStorage.getItem('user_avatar'),
      name: localStorage.getItem('user_name'),
      email: localStorage.getItem('user_email'),
      id: localStorage.getItem('user_id'),
      role: localStorage.getItem('user_role'),
    };

    if (storedUserData.email) {
      setUserData(storedUserData); // Armazena os dados do usuário no estado
    }
  }, []);

  return (
    <>
      <NavBarContainer id="home">
        <NavBarContent>
          <Link to="/">
            <Logo>CYBER</Logo>
          </Link>
          <Navigation>
            {!userData?.email ? (
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
                  <img src={userData?.avatar || 'default-avatar.png'} alt="Avatar" />
                  <i onClick={() => setShowDropDown(!showDropDown)} className='bx bx-chevron-down'></i>
                </IconProfile>
                {showDropDown && (
                  <DropDown>
                    <li><Link to='/RiskOverview'>Vazamentos</Link></li>
                    <li><Link to='/Profile'>Perfil</Link></li>
                    <li onClick={handleLogout}>Sair</li>
                  </DropDown>
                )}
              </>
            )}
          </Navigation>
        </NavBarContent>
      </NavBarContainer>
    </>
  );
};

export default NavBar;
