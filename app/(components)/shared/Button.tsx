import React from "react";

type Props = {
  text: string;
  size: "big" | "small";
  width?: "full" | "auto";
  customClass?: string;
  onClick?: () => void;
  isAnchor?: boolean;
  anchorId?: string;
};

export default function Button(props: Props) {
  return (
    <>
      {props.isAnchor ? (
        <a
          href={`#${props.anchorId}`}
          className={`${props.width === "full" ? "w-full" : ""} ${
            props.size === "big" ? "px-10 py-6" : "px-6 py-4"
          } bg-custom-blue-500 hover:bg-custom-red-500 transition-colors text-center text-white cursor-pointer text-lg md:text-2xl font-bold tracking-widest shadow-lg uppercase ${
            props.customClass
          }`}
        >
          {props.text}
        </a>
      ) : (
        <button
          onClick={props.onClick}
          className={`${props.width === "full" ? "w-full" : ""} ${
            props.size === "big" ? "px-10 py-6" : "px-6 py-4"
          } bg-custom-blue-500 hover:bg-custom-red-500 transition-colors text-white cursor-pointer text-lg md:text-2xl font-bold tracking-widest shadow-lg uppercase ${
            props.customClass
          }`}
        >
          {props.text}
        </button>
      )}
    </>
  );
}
