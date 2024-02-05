import React, { ReactElement } from "react";

type Props = {
  text: string;
  size: "big" | "small";
};

export default function Button(props: Props) {
  return (
    <button
      className={`${
        props.size === "big" ? "px-10 py-6" : "px-6 py-4"
      } bg-custom-blue-500 hover:bg-custom-red-500 transition-colors text-white cursor-pointer text-2xl font-bold tracking-widest shadow-lg uppercase`}
    >
      {props.text}
    </button>
  );
}
