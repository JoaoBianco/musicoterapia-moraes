import Banner from "./(components)/Banner";
import Button from "./(components)/Button";
import Hero from "./(components)/hero/Hero";
import Musicoterapia from "./(components)/musicoterapia/Musicoterapia";
import NavBar from "./(components)/navBar/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Banner
        title="Musica, Terapia & Movimiento"
        text="¿Sabes qué es la musicoterapia? ¡¿No?!"
        backgroundImage="img/banner_2.jpg"
        darker={true}
      >
        <Button size="small" text="Averígualo" />
      </Banner>
      <Musicoterapia />
    </>
  );
}
