import React from "react";

export default function Wrapper({
  children,
  customClass,
  title,
  noSpace = false,
  childrenClass,
}: Readonly<{
  children: React.ReactNode;
  customClass?: string;
  title?: string;
  noSpace?: boolean;
  childrenClass?: string;
}>) {
  return (
    <div
      className={`max-w-[1600px] m-auto ${
        noSpace ? "max-w-full" : "px-12"
      } ${customClass}`}
    >
      {title ? (
        <h2 className="text-center font-black text-2xl mb-12 uppercase tracking-widest drop-shadow">
          {title}
        </h2>
      ) : null}
      <div className={childrenClass}>{children}</div>
    </div>
  );
}
