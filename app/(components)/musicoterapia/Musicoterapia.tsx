import React from "react";
import Wrapper from "../shared/Wrapper";
import Separator from "../shared/Separator";

export default function Musicoterapia() {
  return (
    <section id="musicoterapia">
      <Separator showIcon={false} />
      <Wrapper title="Musicoterapia" noSpace={true}>
        <div
          style={{ backgroundImage: "url('/img/diagonal-background.jpg')" }}
          className="p-12 py-32 grid place-content-center bg-cover bg-center relative clippath-musico"
        >
          <div className="bg-black bg-opacity-40 absolute inset-0 isolate"></div>
          <p className="text-white max-w-[800px] leading-8 z-10 text-xl drop-shadow-md my-10">
            Musicoterapia es una propuesta terapéutica desarrollada desde el
            inicio del siglo XX en los EEUU, algunos países de Sudamérica como
            Brasil, Argentina y algunos países de Europa como Inglaterra,
            Francia y Alemania y desde hace pocos años está siendo implantada en
            España. Gracias a las transformaciones que las actividades musicales
            individualizadas provocan en el ser humano, la Musicoterapia se está
            utilizando con éxito en el reestablecimiento del equilibrio integral
            (físico, psicológico y social) de las personas en situación de
            carencias y desequilibrios de cualquier naturaleza. Según la World
            Federation of Music Therapy en su congreso en Hamburgo en 1996: “la
            musicoterapia es el uso de la música y/o de los elementos musicales
            (sonido, ritmo, melodía, armonía) por un Musicoterapeuta calificado,
            con un paciente o grupo de pacientes, para facilitar la
            comunicación, la interrelación, el aprendizaje, la movilización, la
            expresión, la organización y otros objetivos terapéuticos
            relevantes, con el objetivo de atender necesidades físicas,
            emocionales, mentales, sociales y cognitivas. La Musicoterapia
            apunta a desarrollar potenciales y/o restablecer funciones del
            individuo para que éste pueda emprender una mejor integración
            intrapersonal e interpersonal, y en consecuencia alcanzar una mejor
            calidad de vida, a través de la prevención, la rehabilitación o el
            tratamiento.
          </p>
        </div>
      </Wrapper>
      <Separator />
    </section>
  );
}
