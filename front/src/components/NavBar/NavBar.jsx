import { NavBarContainer, NavBarContent, Logo, Navigation, BtnLogin, BtnSignup } from './NavBar.styles'

const NavBar = () => {
  return (
    <>
    <NavBarContainer>
      <NavBarContent>
          <Logo>CYBER</Logo>
          <Navigation>
            <BtnLogin>Entrar</BtnLogin>
            <BtnSignup>Catastre-se</BtnSignup>
            </Navigation>
      </NavBarContent>
    </NavBarContainer>
    {/* <h2>NavBar</h2>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime enim aspernatur et earum possimus porro iure voluptatum commodi molestias! Itaque, illum et! Impedit delectus aperiam deserunt laborum consequatur nulla nam! */}
    </>
  );
};

export default NavBar;
