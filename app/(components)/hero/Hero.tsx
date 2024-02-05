import Image from "next/image";
import React from "react";
import Wrapper from "../shared/Wrapper";
import Separator from "../shared/Separator";

export default function Hero() {
  return (
    <>
      <div className="bg-custom-red-500 custom-clippath min-h-[80vh] grid place-content-center">
        <Wrapper customClass="py-8 flex gap-4 justify-center align-center">
          <div className="text-white flex flex-col gap-8 justify-center align-start">
            <Image
              src={"/assets/mm_marca-2.png"}
              alt="Musicoterapia Moraes"
              width={768}
              height={768}
            />
            <h2 className="text-xl md:text-4xl leading-8 md:leading-[4rem] text-center md:text-start">
              Música para la vida
              <br />
              Terapia para la mente
              <br />
              Movimiento para el cuerpo
            </h2>
          </div>
          <Image
            src={"/img/img-topo-piano.svg"}
            alt="Musicoterapia Moraes"
            width={768}
            height={768}
            className="hidden md:block"
          />
        </Wrapper>
      </div>
      <Separator />
    </>
  );
}
