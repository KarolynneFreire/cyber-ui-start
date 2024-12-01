import NavBar from "../../components/NavBar/NavBar";
import { Bg } from "./Home.styles";
import HeroSection from "./HeroSection/HeroSection";
import MainSection from './MainSection/MainSection'

const Home = () => {
  return (
    <>
      <Bg>
        <NavBar/>
        <HeroSection/>
        <MainSection/>
      </Bg>
    </>
  );
};

export default Home;
