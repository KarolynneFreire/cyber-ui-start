import NavBar from "../../components/NavBar/NavBar";
import { Bg } from "./Home.styles";
import HeroSection from "./HeroSection/HeroSection";
import MainSection from './MainSection/MainSection'
import ResponseNotAvailable from "../../components/ResolutionNotAvailable/ResolutionNotAvailable";

const Home = () => {
  return (
    <>
      <Bg>
        <NavBar/>
        <HeroSection/>
        <MainSection/>
      </Bg>
      <ResponseNotAvailable/>
    </>
  );
};

export default Home;
