"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Wrapper from "../Wrapper";
import NavBarItems from "./NavBarItems";
import NavBarMobile from "./NavBarMobile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { showItems } from "@/app/(framer-motion)/navBar";

export default function NavBar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function verifyWidth() {
    const width = window.innerWidth;
    if (width < 900) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }

  useEffect(() => {
    verifyWidth();

    window.addEventListener("resize", () => {
      verifyWidth();
    });

    return () => window.removeEventListener("resize", verifyWidth);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <nav
      className={`shadow-md font-medium sticky top-0 bg-white w-full z-20 ${
        isMobile && isOpen ? "h-screen" : ""
      }`}
    >
      <Wrapper customClass="flex py-3 items-center">
        {!isMobile ? (
          <motion.h2
            variants={showItems()}
            initial={showItems().hiddenFromLeft}
            animate={showItems().visibleFromLeft}
          >
            <span className="text-custom-red-500">M</span>usicoterapia{" "}
            <span className="text-custom-blue-500">M</span>oraes
          </motion.h2>
        ) : (
          <Image
            src={"/assets/imgLogo.png"}
            alt="Musicoterapia Moraes"
            width={36}
            height={36}
          />
        )}

        {isMobile ? (
          <FontAwesomeIcon
            className="ml-auto cursor-pointer hover:text-custom-blue-500"
            onClick={() => setIsOpen(true)}
            icon={faBars}
          />
        ) : null}
        {!isMobile ? (
          <NavBarItems />
        ) : isOpen ? (
          <NavBarMobile isOpen={isOpen} setIsOpen={setIsOpen} />
        ) : null}
      </Wrapper>
    </nav>
  );
}
