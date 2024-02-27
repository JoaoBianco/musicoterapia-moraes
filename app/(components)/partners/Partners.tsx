import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import Separator from "../shared/Separator";

export default function Partners() {
  const imagesToRender = [
    {
      alt: "Asociación Alarde: asociación para personas con discapacidad",
      src: "alarde_2.png",
      url: "https://www.alardeescueladearte.com/",
    },
    {
      alt: "La consulta del hospitalillo",
      src: "consulta-hospitalillo-logo.png",
      url: "https://www.facebook.com/laconsultadelhospitalillo/",
    },
    {
      alt: "EDUKARTE",
      src: "edukarte.png",
      url: "https://www.centroedukarte.com/",
    },
    {
      alt: "Sapyrin park, Centro de ocio infantil.",
      src: "park.jpg",
      url: "https://www.facebook.com/sapyrin",
    },
    {
      alt: "parkinsonasturias",
      src: "logotipo_parkinson_asturias_cut.png",
      url: "https://www.parkinsonasturias.org/",
    },
  ];

  return (
    <>
      <Separator showIcon={false} />
      <Wrapper title="centros asociados" id="asociados">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          {imagesToRender.map((img) => {
            return (
              <a href={img.url} key={img.src} target="_blank">
                <Image
                  src={`/img/${img.src}`}
                  alt={img.alt}
                  width={300}
                  height={300}
                />
              </a>
            );
          })}
        </div>
      </Wrapper>
    </>
  );
}
