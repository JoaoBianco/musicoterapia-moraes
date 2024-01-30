import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

export default function GoBack() {
  return (
    <Link
      href="/"
      className="absolute bottom-1 right-8 bg-custom-blue-500 text-white p-4 rounded-md cursor-pointer"
    >
      <FontAwesomeIcon size={"1x"} icon={faAngleLeft} /> Volver
    </Link>
  );
}
