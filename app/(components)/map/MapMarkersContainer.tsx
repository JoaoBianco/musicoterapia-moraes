import React from "react";
import MapMarker from "./MapMarker";
import { MapMarkerType } from "@/app/(types)/types";

export default function MapMarkersContainer({
  positions,
}: {
  positions: Array<MapMarkerType>;
}) {
  return (
    <div className="absolute top-0 left-[50%] -translate-x-[50%] bg-custom-red-400 z-[5] max-w-[250px] md:max-w-[600px]">
      <div className="flex">
        {positions.map((pos, index) => {
          return (
            <MapMarker
              key={index}
              position={pos}
              showBorder={index !== 0 && index !== positions.length - 1}
            />
          );
        })}
      </div>
    </div>
  );
}
