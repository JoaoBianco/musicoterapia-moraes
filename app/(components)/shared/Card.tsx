import React from "react";

export default function Card({
  children,
  customClass,
  onClick,
  isComplex = true,
}: {
  children: React.ReactNode;
  customClass?: string;
  onClick?: () => void;
  isComplex?: boolean;
}) {
  const complexCard =
    "p-4 outline-offset-4 outline-custom-blue-500 outline-4 outline bg-custom-blue-400 shadow-box-shadow-card";
  const simpleCard =
    "p-4 outline-black outline-4 bg-white border-2 border-black text-black";

  return (
    <div
      onClick={onClick}
      className={`${isComplex ? complexCard : simpleCard}  ${customClass}`}
    >
      {children}
    </div>
  );
}
