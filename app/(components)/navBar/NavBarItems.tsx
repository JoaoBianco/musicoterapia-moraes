"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { showItems } from "@/app/(framer-motion)/navBar";

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

  const menuItens = [
    {
      label: "Home",
      href: "#",
    },
    {
      label: "Musicoterapia",
      href: "#",
    },
    {
      label: "Quines Somos",
      href: "#",
    },
    {
      label: "Servicios",
      href: "#",
    },
    {
      label: "Asociados",
      href: "#",
    },
    {
      label: "Opiniones",
      href: "#",
    },
    {
      label: "Localización",
      href: "#",
    },
    {
      label: "Contacto",
      href: "#",
    },
  ];

  return (
    <motion.div
      className={`ml-auto flex gap-4 text-sm [&>*]:transition-colors ${customClass}`}
    >
      {menuItens.map((item, index) => {
        return (
          <motion.span
            key={index}
            variants={showItems(index)}
            initial={showItems(index).hidden}
            animate={showItems(index).visible}
            exit={showItems(index).hidden}
          >
            <Link
              className="hover:text-custom-blue-500 transition-colors"
              onClick={() => closeMenu()}
              href={item.href}
            >
              {item.label}
            </Link>
          </motion.span>
        );
      })}
    </motion.div>
  );
}
