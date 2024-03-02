import React, { Suspense } from "react"
import PdfDocument from "../(components)/shared/PdfDocument"

export default function page() {
  return (
    <Suspense>
      <PdfDocument pdf="./pdf/politica-privacidad" />{" "}
    </Suspense>
  )
}
