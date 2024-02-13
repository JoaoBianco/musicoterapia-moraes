"use client";

import React from "react";
import MapMarker from "./MapMarker";
import { MapMarkerType } from "@/app/(types)/types";

export default function MapMarkersContainer({
  positions,
  activePosition,
  setActivePosition,
}: {
  positions: Array<MapMarkerType>;
  activePosition: [number, number];
  setActivePosition: (coords: [number, number]) => void;
}) {
  function verifyIfActive(coords: [number, number]) {
    return activePosition[0] === coords[0] && activePosition[1] === coords[1]
      ? true
      : false;
  }
  return (
    <div className="absolute -bottom-12 left-[50%] -translate-x-[50%] bg-custom-red-400 z-[5] max-w-[250px] md:max-w-[600px]">
      <div className="flex">
        {positions.map((pos, index) => {
          return (
            <MapMarker
              key={index}
              position={pos}
              showBorder={index !== 0 && index !== positions.length - 1}
              isActive={verifyIfActive(pos.coords)}
              setActivePosition={setActivePosition}
            />
          );
        })}
      </div>
    </div>
  );
}
