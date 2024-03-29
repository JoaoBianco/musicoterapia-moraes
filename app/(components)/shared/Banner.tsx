import React, { ReactElement } from "react";

type Props = {
  backgroundImage: string;
  children?: ReactElement | ReactElement[];
  title?: string;
  text?: string;
  darker?: boolean;
  customClass?: string;
};

export default function Banner({
  backgroundImage,
  children,
  title,
  text,
  darker,
  customClass,
}: Props) {
  return (
    <div
      style={{ backgroundImage: `url('/${backgroundImage}')` }}
      className={`min-h-[36vh] bg-cover bg-no-repeat bg-center flex justify-center items-center relative ${
        customClass || ""
      }`}
    >
      {darker ? (
        <div className="bg-black bg-opacity-40 absolute inset-0 isolate"></div>
      ) : null}
      <div className="z-10 flex items-center justify-center flex-col gap-4 text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]">
        <h2 className="text-2xl lg:text-5xl mb-8 text-center font-bold">
          {title}
        </h2>
        <p className="">{text}</p>
        {children}
      </div>
    </div>
  );
}
