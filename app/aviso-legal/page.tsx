"use client"

import React, { Suspense } from "react"
import PdfDocument from "../(components)/shared/PdfDocument"

export default function page() {
  return (
    <Suspense>
      <PdfDocument pdf="./pdf/aviso-legal" />
    </Suspense>
  )
}
