import NavBar from "../../components/NavBar/NavBar";
import { Bg } from "./Home.styles";
import HeroSection from "./HeroSection/HeroSection";
import MainSection from './MainSection/MainSection'
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Bg>
        <NavBar/>
        <HeroSection/>
        <MainSection/>
        <Footer/>
      </Bg>
    </>
  );
};

export default Home;
