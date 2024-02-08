import React from "react";
import Banner from "../shared/Banner";
import Wrapper from "../shared/Wrapper";
import Separator from "../shared/Separator";
import Card from "../shared/Card";

export default function Review() {
  const textsToRender = [
    {
      text: " Nuestra experiencia con la actividad de musicoterapia, con nuestros chicos de Alarde, ha sido muy positiva. Desde edades muy tempranas, permite mayor interacción y Aline utilizando técnicas de intervención ha sabido llegar a ellos mejorando tanto su desarrollo como su calidad de vida.",
      author: "Azucena Coronas. Asociación Alarde",
    },
    {
      text: "En la Asociación se lleva ofreciendo musicoterapia casi 15 años. Para las personas enfermas de Parkinson la musicoterapia tiene un doble beneficio. Por un lado, la música produce unos beneficios a nivel motor pues les ayuda a mejorar la marcha y los bloqueos y, por otro lado, el hecho de escuchar música les produce un bienestar emocional que mejora su estado de ánimo.  Podríamos decir que en nuestra asociación además ayuda a confraternizar más los grupos al crear un clima de bienestar entre las personas participantes debido a que la música ejerce un efecto de euforia y de alegría.",
      author:
        "Yolanda Villanueva Rodríguez. Directora de la Asociación Parkinson Asturias",
    },
  ];

  return (
    <section id="opiniones">
      <Separator showIcon={false} />
      <Banner backgroundImage="img/background_music_2.jpg">
        <Wrapper
          title="opiniones"
          childrenClass="flex md:flex-row flex-col gap-16"
        >
          {textsToRender.map((content) => {
            return (
              <Card
                key={content.text}
                isComplex={false}
                customClass="flex-1 flex flex-col justify-center items-end gap-8 p-8 bg-opacity-95 min-h-[350px]"
              >
                <p className="mt-auto font-semibold">{content.text}</p>
                <p className="mt-auto ml-8 text-gray-500 text-right">
                  - {content.author}
                </p>
              </Card>
            );
          })}
        </Wrapper>
        <Separator showIcon={false} />
      </Banner>
    </section>
  );
}
