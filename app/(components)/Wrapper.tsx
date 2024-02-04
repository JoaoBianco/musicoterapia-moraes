import React from "react";

export default function Wrapper({
  children,
  customClass,
  title,
}: Readonly<{
  children: React.ReactNode;
  customClass?: string;
  title?: string;
}>) {
  return (
    <div className={`max-w-[1600px] m-auto px-12 ${customClass}`}>
      {title ? <h2>{title}</h2> : null}
      {children}
    </div>
  );
}
