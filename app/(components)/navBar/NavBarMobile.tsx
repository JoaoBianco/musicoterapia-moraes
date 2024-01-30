"use client";

import React from "react";
import NavBarItems from "./NavBarItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function NavBarMobile({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="inset-0 bg-white z-10 absolute">
      {isOpen ? (
        <FontAwesomeIcon
          onClick={() => setIsOpen(false)}
          icon={faX}
          className="absolute right-10 top-10 cursor-pointer hover:text-custom-blue-500"
        />
      ) : null}
      <NavBarItems
        setIsOpen={setIsOpen}
        customClass="h-full text-lg flex-col items-center justify-center"
      />
    </div>
  );
}
