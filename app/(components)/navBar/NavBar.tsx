"use client";

import React, { useEffect, useState } from "react";
import Wrapper from "../Wrapper";
import NavBarItems from "./NavBarItems";
import NavBarMobile from "./NavBarMobile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence } from "framer-motion";

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

  return (
    <nav className="shadow-md font-medium ">
      <Wrapper customClass="flex py-3 items-center">
        <h2>
          <span className="text-custom-red-500">M</span>usicoterapia{" "}
          <span className="text-custom-blue-500">M</span>oraes
        </h2>
        {isMobile ? (
          <FontAwesomeIcon
            className="ml-auto cursor-pointer hover:text-custom-blue-500"
            onClick={() => setIsOpen(true)}
            icon={faBars}
          />
        ) : null}
        <AnimatePresence>
          {!isMobile ? (
            <NavBarItems />
          ) : isOpen ? (
            <NavBarMobile isOpen={isOpen} setIsOpen={setIsOpen} />
          ) : null}
        </AnimatePresence>
      </Wrapper>
    </nav>
  );
}
