import React from "react"
import Banner from "../shared/Banner"
import Image from "next/image"
import Link from "next/link"

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
        <span className="ml-auto">
          Developed with 💙 by{" "}
          <Link
            className="ml-1"
            href="https://www.joaopsbianco.com/"
            target="_blank"
          >
            João Bianco
          </Link>
        </span>
        <Link
          className="mr-4 ml-auto underline"
          target="_blank"
          href="./aviso-legal"
        >
          Aviso legal
        </Link>
      </div>
    </div>
  )
}
