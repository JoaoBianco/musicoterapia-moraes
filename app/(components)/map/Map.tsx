"use client";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Wrapper from "../shared/Wrapper";
import "leaflet/dist/leaflet.css";
import Separator from "../shared/Separator";
import MapMarkersContainer from "./MapMarkersContainer";
import { MapMarkerType } from "@/app/(types)/types";

export default function Map() {
  const position: [number, number] = [43.364470559967046, -5.836087695316612];

  const positions: Array<MapMarkerType> = [
    { label: "Test1", coords: [43.364470559967046, -5.836087695316612] },
    { label: "Test2", coords: [43.53819481149433, -5.699539810953275] },
    { label: "Test3", coords: [43.551562480861904, -5.919713525040725] },
  ];
  return (
    <>
      <Separator showIcon={false} />
      <Wrapper
        noSpace={true}
        title="DONDE ESTAMOS"
        customClass="relative z-[1]"
      >
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "80vh", width: "100wh", zIndex: "1" }}
        >
          <TileLayer
            url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
            subdomains={["mt0", "mt1", "mt2", "mt3"]}
          />
        </MapContainer>
        <MapMarkersContainer positions={positions} />
      </Wrapper>
    </>
  );
}
