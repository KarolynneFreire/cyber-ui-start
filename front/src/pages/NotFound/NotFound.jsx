import Footer from "../../components/Footer/Footer"
import NavBar from "../../components/NavBar/NavBar"
import { Bg, TitleNotFound, DescriptionNotFound } from "./NotFound.styles"
import { BtnBackHome } from "../../components/Buttons/Buttons"
import ResolutionNotAvailable from "../../components/ResolutionNotAvailable/ResolutionNotAvailable"
import 'boxicons/css/boxicons.min.css';

function NotFound() {
  return (
    <>
    <ResolutionNotAvailable/>
    <Bg>
      <NavBar/>
      <main>
        <TitleNotFound>404</TitleNotFound>
        <DescriptionNotFound>Página não encontrada</DescriptionNotFound>
        <BtnBackHome/>
      </main>
      <Footer/>
    </Bg>
    </>
  )
}

export default NotFound
