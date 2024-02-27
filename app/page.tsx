import Banner from "./(components)/shared/Banner";
import Button from "./(components)/shared/Button";
import Hero from "./(components)/hero/Hero";
import Musicoterapia from "./(components)/musicoterapia/Musicoterapia";
import NavBar from "./(components)/navBar/NavBar";
import Introduction from "./(components)/introduction/Introduction";
import Services from "./(components)/services/Services";
import Partners from "./(components)/partners/Partners";
import Review from "./(components)/review/Review";
import dynamic from "next/dynamic";
import Contact from "./(components)/contact/Contact";
import MusicoterapiaBanner from "./(components)/musicoterapiaBanner/MusicoterapiaBanner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MapWithNoSSR = dynamic(() => import("./(components)/map/Map"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <ToastContainer />
      <NavBar />
      <Hero />
      <Banner
        title="Musica, Terapia & Movimiento"
        text="¿Sabes qué es la musicoterapia? ¡¿No?!"
        backgroundImage="img/banner_2.jpg"
        darker={true}
      >
        <Button
          isAnchor={true}
          anchorId="musicoterapia"
          size="small"
          text="Averígualo"
        />
      </Banner>
      <Musicoterapia />
      <Introduction />
      <Services />
      <Partners />
      <Review />
      <MapWithNoSSR />
      <Contact />
      <MusicoterapiaBanner />
    </>
  );
}
