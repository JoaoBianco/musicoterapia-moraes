import React from "react";

export default function Card({
  children,
  customClass,
  onClick,
}: {
  children: React.ReactNode;
  customClass?: string;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`p-4 outline-offset-4 outline-custom-blue-500 outline-4 outline bg-custom-blue-400 shadow-box-shadow-card ${customClass}`}
    >
      {children}
    </div>
  );
}
