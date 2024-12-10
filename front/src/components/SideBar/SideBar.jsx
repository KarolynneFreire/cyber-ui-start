import { useNavigate } from 'react-router-dom'; 
import { SideBarMenu, LogOut, Option, I } from "./SideBar.styles.js";

const SideBar = () => {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    if (route === 'logout') {

      localStorage.removeItem('access_token');
      localStorage.removeItem('email');
      
        setTimeout(() => {
          navigate('/');
          window.location.reload();
        }, 2000);
      
    } else {
      navigate(route);
    }
  };

  return (
    <SideBarMenu>
      <Option>
        <abbr title="Início">
          <I onClick={() => handleNavigation('/')} className='bx bx-home-alt-2' style={{ color: '#a0a0a0' }}></I>
        </abbr>
        <abbr title="Perfil">
          <I onClick={() => handleNavigation('/profile')} className='bx bx-user' style={{ color: '#a0a0a0' }}></I>
        </abbr>
        <abbr title="">
          <I onClick={() => handleNavigation('/')} className='bx bx-plus-medical' style={{ color: '#a0a0a0' }}></I>
        </abbr>
        <abbr title="">
          <I onClick={() => handleNavigation('/rota')} className='bx bx-library' style={{ color: '#a0a0a0' }}></I>
        </abbr>
      </Option>
      <LogOut>
        <Option>
          <abbr title="Log out">
            <I onClick={() => handleNavigation('logout')} className='bx bx-log-out' style={{ color: '#a0a0a0' }}></I>
          </abbr>
        </Option>
      </LogOut>
    </SideBarMenu>
  );
};

export default SideBar;
