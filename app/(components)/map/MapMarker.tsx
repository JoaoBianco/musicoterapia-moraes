"use client"
import { MapMarkerType } from "@/app/(types)/types"
import { faCaretUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

export default function MapMarker({
  position,
  showBorder = false,
  isActive = false,
  setActivePosition,
}: {
  position: MapMarkerType
  showBorder?: boolean
  isActive?: boolean
  setActivePosition: (coords: [number, number]) => void
}) {
  return (
    <div
      className={`${showBorder ? "border-x-2 border-white" : ""} ${
        isActive ? "bg-custom-red-500" : ""
      } relative flex items-center justify-center flex-1 hover:bg-custom-red-500 text-white transition-all duration-300 `}
    >
      {isActive ? (
        <FontAwesomeIcon
          icon={faCaretUp}
          className="absolute -top-3 text-2xl text-custom-red-500 left-[50%] -translate-x-[50%]"
        />
      ) : null}
      <p
        onClick={() => setActivePosition(position.coords)}
        className="p-4 md:p-4 cursor-pointer text-sm text-center"
      >
        {position.label}
      </p>
    </div>
  )
}
