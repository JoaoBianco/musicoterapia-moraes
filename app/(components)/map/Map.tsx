"use client";
import React, { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import Wrapper from "../shared/Wrapper";
import "leaflet/dist/leaflet.css";
import Separator from "../shared/Separator";
import MapMarkersContainer from "./MapMarkersContainer";
import { MapMarkerType } from "@/app/(types)/types";
import L from "leaflet";

export default function Map() {
  const [activePosition, setActivePosition] = useState<[number, number]>([
    43.364470559967046, -5.836087695316612,
  ]);

  const icon = L.icon({
    iconUrl: "/img/leaflet/marker-icon-2x.png",
    shadowUrl: "/img/leaflet/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
  const positions: Array<MapMarkerType> = [
    { label: "Test1", coords: [43.364470559967046, -5.836087695316612] },
    { label: "Test2", coords: [43.53819481149433, -5.699539810953275] },
    { label: "Test3", coords: [43.551562480861904, -5.919713525040725] },
  ];

  function ChangeView({
    center,
    zoom,
  }: {
    center: [number, number];
    zoom: number;
  }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }

  return (
    <>
      <Separator showIcon={false} />
      <Wrapper
        noSpace={true}
        title="DONDE ESTAMOS"
        customClass="relative z-[1]"
      >
        <MapContainer
          center={activePosition}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "80vh", width: "100wh", zIndex: "1" }}
        >
          <ChangeView center={activePosition} zoom={13} />
          <TileLayer
            url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
            subdomains={["mt0", "mt1", "mt2", "mt3"]}
          />
          {positions.map((pos, index) => {
            return (
              <Marker position={pos.coords} key={index} icon={icon}>
                <Popup>{pos.label}</Popup>
              </Marker>
            );
          })}
        </MapContainer>
        <MapMarkersContainer
          positions={positions}
          activePosition={activePosition}
          setActivePosition={setActivePosition}
        />
      </Wrapper>
    </>
  );
}
