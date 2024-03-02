import React from "react"
import Banner from "../shared/Banner"
import Image from "next/image"

export default function MusicoterapiaBanner() {
  return (
    <div className="flex flex-col">
      <Image
        className="w-full h-full max-h-[400px] object-fill"
        width={900}
        height={500}
        src="/img/banner.jpg"
        alt="Musicoterapia Moraes"
      />
      <div className="flex items-center justify-center text-white text-sm font-semibold bg-custom-blue-400">
        Developed with 💙 by{" "}
        <a
          className="ml-1"
          href="https://www.joaopsbianco.com/"
          target="_blank"
        >
          João Bianco
        </a>
      </div>
    </div>
  )
}
