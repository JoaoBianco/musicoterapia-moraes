import Banner from "./(components)/Banner";
import Button from "./(components)/Button";
import Hero from "./(components)/hero/Hero";
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
      >
        <Button size="small" text="Averígualo" />
      </Banner>
    </>
  );
}
