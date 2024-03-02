"use client"
import React, { useState } from "react"
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet"
import Wrapper from "../shared/Wrapper"
import "leaflet/dist/leaflet.css"
import Separator from "../shared/Separator"
import MapMarkersContainer from "./MapMarkersContainer"
import { MapMarkerType } from "@/app/(types)/types"
import L from "leaflet"

export default function Map() {
  const [activePosition, setActivePosition] = useState<[number, number]>([
    43.364429237966306, -5.836065439232642,
  ])

  const icon = L.icon({
    iconUrl: "/img/leaflet/marker-icon-2x.png",
    shadowUrl: "/img/leaflet/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  })
  const positions: Array<MapMarkerType> = [
    {
      label: "Calle Tenderina Alta, n° 36 - bajo",
      coords: [43.364429237966306, -5.836065439232642],
      link: "https://www.google.com/maps/place/Calle+Tenderina+Alta,+36,+33010+Oviedo,+Asturias,+Spain/@43.364458,-5.8362485,20z/data=!4m5!3m4!1s0xd368cf2a568b04b:0xceb1be87b8b0030!8m2!3d43.364469!4d-5.8360872?shorturl=1",
    },
    {
      label: "Calle María Zambrano, 9, 33213 Gijón",
      coords: [43.538076167191214, -5.699526092929889],
      link: "https://www.google.com/maps/place/C.+Mar%C3%ADa+Zambrano,+9,+Gijon-Oeste,+33213+Gij%C3%B3n,+Asturias,+Spain/@43.5382096,-5.6996136,21z/data=!4m15!1m8!3m7!1s0xd367da61258fe25:0x5805669db9e2bcab!2sC.+Mar%C3%ADa+Zambrano,+9,+Gijon-Oeste,+33213+Gij%C3%B3n,+Asturias,+Spain!3b1!8m2!3d43.5380745!4d-5.6995244!16s%2Fg%2F11c5mbgxm4!3m5!1s0xd367da61258fe25:0x6eaa43deef48b434!8m2!3d43.5380745!4d-5.6995244!16s%2Fg%2F11q2nh4n7k?entry=ttu",
    },
    {
      label: "Calle Rivero, 112, 33402 Avilés",
      coords: [43.551550795247046, -5.919714318689684],
      link: "https://www.google.com/maps/place/C.+Rivero,+112,+33402+Avil%C3%A9s,+Asturias,+Spain/@43.5515593,-5.9198434,21z/data=!4m6!3m5!1s0xd369b67ff4066b3:0xb52eaf382dbaadd9!8m2!3d43.551552!4d-5.9197149!16s%2Fg%2F11bw44fxv6?entry=ttu",
    },
  ]

  function ChangeView({
    center,
    zoom,
  }: {
    center: [number, number]
    zoom: number
  }) {
    const map = useMap()
    map.setView(center, zoom)
    return null
  }

  return (
    <>
      <Separator showIcon={false} />
      <Wrapper
        id="localizacion"
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
                <Popup>
                  <a href={pos.link} target="_blank">
                    {pos.label}
                  </a>
                </Popup>
              </Marker>
            )
          })}
        </MapContainer>
        <MapMarkersContainer
          positions={positions}
          activePosition={activePosition}
          setActivePosition={setActivePosition}
        />
      </Wrapper>
      <Separator showIcon={false} />
    </>
  )
}
