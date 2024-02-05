import React from "react";
import Separator from "../shared/Separator";
import Wrapper from "../shared/Wrapper";
import Card from "../shared/Card";
import Image from "next/image";

export default function Introduction() {
  return (
    <section id="quienes-somos">
      <Wrapper title="QUIENES SOMOS">
        <div className="md:flex-row flex-col flex gap-12 items-center justify-between">
          <div className="flex gap-8 flex-col max-w-[650px]">
            <h3 className="font-bold text-2xl">
              `Somos un conjunto de profesionales cualificados, formados en los
              campos de la educación, música y terapia.`
            </h3>
            <p className="text-xl">
              Nuestro objetivo es promover la música tanto en el ámbito
              educativo, como terapéutico y ¿porque no? también en el lúdico,
              divulgando así la cultura musical además de mejorar la calidad de
              vida de un amplio sector de la sociedad. Nuestra cobertura va
              desde el bebé en el útero hasta la tercera edad, pasando por todas
              las etapas de vida intermedias.
            </p>
          </div>
          <Card customClass="flex flex-col gap-6 items-center text-center max-w-[450px]">
            <Image
              src={"/img/Img-rosto.jpeg"}
              alt=""
              width={160}
              height={160}
              className="rounded-full w-40 h-40 object-cover"
            />
            <h4 className="font-bold text-stone-800 text-xl tracking-wider">
              Aline Moraes
            </h4>
            <p className="text-xs text-stone-700 font-semibold max-w-56">
              DIRECTORA, MUSICOTERAPEUTA Y MAESTRA DE MÚSICA
            </p>
            <p className="text-white text-sm">
              Licenciada en Musicoterapia por la Universidad de Ribeirão Preto,
              Brasil, amplía sus estudios en el Instituto Superior de Estudios
              Psicológicos cursando el Master en Musicoterapia. Músico
              profesional por el Conservatorio Musical “Maestro Mário Veneri” de
              Monte Alto, instrumento piano
            </p>
          </Card>
        </div>
      </Wrapper>
      <Separator />
    </section>
  );
}
