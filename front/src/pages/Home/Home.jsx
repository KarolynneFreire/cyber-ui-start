import NavBar from "../../components/NavBar/NavBar";
import { Bg } from "./Home.styles";
import HeroSection from "./HeroSection/HeroSection";
import MainSection from './MainSection/MainSection'
import ResponseNotAvailable from "../../components/ResolutionNotAvailable/ResolutionNotAvailable";
import Footer from "../../components/Footer/Footer";
import AnimatedStats from "./AnimatedStats/AnimatedStats.jsx";
import TipsComponent from './TipsComponent/TipsComponent';
import SecurityQuiz from './SecurityQuiz/SecurityQuiz';
import BannerContainer from "../../components/Banner/Banners";
import { BannerTeam } from "../../components/Banner/Banners";

const Home = () => {
  return (
    <>
      <Bg>
        <NavBar/>
        <HeroSection/>
        <BannerContainer/>
        <MainSection/>
        <AnimatedStats/>
        <TipsComponent/>
        <SecurityQuiz/>
        <BannerTeam/>
        <Footer/>
      </Bg>
      <ResponseNotAvailable/>
    </>
  );
};

export default Home;
