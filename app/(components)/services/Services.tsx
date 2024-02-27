"use client";

import React, { useState } from "react";
import Wrapper from "../shared/Wrapper";
import Card from "../shared/Card";
import Image from "next/image";
import Separator from "../shared/Separator";
import Button from "../shared/Button";

export default function Services() {
  const [cardRotate, setCardRotate] = useState([
    { card: 1, rotate: false },
    { card: 2, rotate: false },
    { card: 3, rotate: false },
  ]);

  const cardsToRender = [
    {
      img: "/img/guitar.svg",
      title: "Musicoterapia",
      description:
        "Musicoterapia para: Prenatal, Estimulación Musical Temprana, Grupos de Bebés, Dificultades de Aprendizaje, Autismo, Asperger, Trastornos del Comportamiento, Otros TrastornosGenerales del Desarrollo, TDAH con Hiperactividad, Síndrome de Down, Parkinson, Alzheimer u otras demencias, Depresión, Trastorno Bipolar, Trastorno Obsesivo Compulsivo, Trastorno de Ansiedad.",
    },
    {
      img: "/img/tent-camp.svg",
      title: "Campamentos & Respiros",
      description:
        "Ofrecemos actividades para que los/as niños/as disfruten de sus tiempos libres. También ofrecemos mensualmente actividades de ocio a chicos/as con discapacidad con excursiones a diferentes lugares.",
    },
    {
      img: "/img/img_note.png",
      title: "Iniciación Musical",
      description:
        "Es un espacio pensado para que el niño ponga en práctica su creatividad mediante actividades lúdicas en donde se destacan la percepción y producción sonora.  La producción de sonido se podrá generar a partir del propio cuerpo o a partir de diferentes elementos previstos para las actividades.  Siendo el juego la experiencia fundamental del aprendizaje del niño, se toma a este como canalizador fundamental de la experiencia. Un juego que nace de las propuestas creativas y expresivas del niño.",
    },
  ];

  function changeCardRotate(card: number) {
    const newCardRotate = cardRotate.map((cardRotate) => {
      if (card === cardRotate.card) {
        return { card: card, rotate: !cardRotate.rotate };
      }
      return cardRotate;
    });

    setCardRotate(newCardRotate);
  }

  return (
    <Wrapper title="que hacemos" id="servicios">
      <div className="card-rotate-perspective flex md:flex-row flex-col gap-12 justify-between min-h-96">
        {cardsToRender.map((card, index) => {
          return (
            <Card
              key={index}
              customClass={`flex items-center justify-center text-center bg-white-snow cursor-pointer custom-card-rotate flex-1 min-h-[400px] ${
                cardRotate[index].rotate === true ? "rotate-x-180" : ""
              }`}
              onClick={() => changeCardRotate(index + 1)}
            >
              <div
                className={`flex flex-col justify-center gap-6 items-center card-rotate inner-card-front  ${
                  cardRotate[index].rotate === true ? "hidden" : ""
                }`}
              >
                <Image src={card.img} alt="" width={80} height={80} />
                <h3 className="text-custom-blue-500 text-3xl font-bold">
                  {card.title}
                </h3>
              </div>
              <div
                className={`card-rotate inner-card-back text-start text-custom-blue-500 ${
                  cardRotate[index].rotate === true ? "" : "hidden"
                }`}
              >
                <p>{card.description}</p>
              </div>
            </Card>
          );
        })}
      </div>
      <div className="w-full flex justify-center mt-12">
        <Button
          customClass="max-w-[820px] text-sm md:text-2xl"
          width="full"
          size="big"
          text="entrar en contato"
          isAnchor={true}
          anchorId="contacto"
        ></Button>
      </div>
    </Wrapper>
  );
}
