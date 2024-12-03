import NavBar from "../../components/NavBar/NavBar";
import { Bg } from "./Home.styles";
import HeroSection from "./HeroSection/HeroSection";
import MainSection from './MainSection/MainSection'
import ResponseNotAvailable from "../../components/ResolutionNotAvailable/ResolutionNotAvailable";
import Footer from "../../components/Footer/Footer";
import AnimatedStats from "./AnimatedStats/AnimatedStats.jsx";


const Home = () => {
  return (
    <>
      <Bg>
        <NavBar/>
        <HeroSection/>
        <MainSection/>
        <AnimatedStats/>
        <Footer/>
      </Bg>
      <ResponseNotAvailable/>
    </>
  );
};

export default Home;
