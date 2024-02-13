import { MapMarkerType } from "@/app/(types)/types";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function MapMarker({
  position,
  showBorder = false,
}: {
  position: MapMarkerType;
  showBorder?: boolean;
}) {
  return (
    <div
      className={`${
        showBorder ? "border-x-2 border-white" : ""
      } relative flex items-center justify-center flex-1 hover:bg-custom-red-500 text-white transition-all duration-300`}
    >
      <FontAwesomeIcon
        icon={faCaretUp}
        className="absolute -top-3 text-2xl text-custom-red-500 left-[50%] -translate-x-[50%]"
      />
      <p className="p-12 cursor-pointer">{position.label}</p>
    </div>
  );
}
