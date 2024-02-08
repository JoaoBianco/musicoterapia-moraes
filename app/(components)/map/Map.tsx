"use client";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Wrapper from "../shared/Wrapper";

export default function Map() {
  const position: [number, number] = [51.505, -0.09];

  const positions: [number, number][] = [
    [43.364470559967046, -5.836087695316612],
    [43.53819481149433, -5.699539810953275],
    [43.551562480861904, -5.919713525040725],
  ];
  return (
    <Wrapper title="DONDE ESTAMOS" childrenClass="max-h-[600px]">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        className="max-w-[600px]"
        style={{ maxHeight: "600px" }}
      >
        <TileLayer
          url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        {positions.map((pos, index) => {
          return (
            <Marker position={pos} key={index}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </Wrapper>
  );
}
