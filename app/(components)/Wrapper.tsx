import React from "react";

export default function Wrapper({
  children,
  customClass,
}: Readonly<{ children: React.ReactNode; customClass?: string }>) {
  return (
    <div className={`max-w-[1600px] m-auto px-4 ${customClass}`}>
      {children}
    </div>
  );
}
