"use client";

import Link from "next/link";
import React from "react";

export default function NavBarItems({
  customClass,
  setIsOpen,
}: {
  customClass?: string;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  function closeMenu() {
    if (setIsOpen) {
      setIsOpen(false);
    }
  }

  return (
    <div
      className={`ml-auto flex gap-4 text-sm [&>*]:transition-colors ${customClass}`}
    >
      <Link
        className="hover:text-custom-blue-500"
        onClick={() => closeMenu()}
        href="#"
      >
        Home
      </Link>
      <Link
        className="hover:text-custom-blue-500"
        onClick={() => closeMenu()}
        href="#"
      >
        Musicoterapia
      </Link>
      <Link
        className="hover:text-custom-blue-500"
        onClick={() => closeMenu()}
        href="#"
      >
        Quines Somos
      </Link>
      <Link
        className="hover:text-custom-blue-500"
        onClick={() => closeMenu()}
        href="#"
      >
        Servicios
      </Link>
      <Link
        className="hover:text-custom-blue-500"
        onClick={() => closeMenu()}
        href="#"
      >
        Asociados
      </Link>
      <Link
        className="hover:text-custom-blue-500"
        onClick={() => closeMenu()}
        href="#"
      >
        Opiniones
      </Link>
      <Link
        className="hover:text-custom-blue-500"
        onClick={() => closeMenu()}
        href="#"
      >
        Localización
      </Link>
      <Link
        className="hover:text-custom-blue-500"
        onClick={() => closeMenu()}
        href="#"
      >
        Contacto
      </Link>
    </div>
  );
}
