import React from "react";
import GoBack from "./GoBack";

export default function PdfDocument({ pdf }: { pdf: string }) {
  return (
    <div className="h-screen w-screen">
      <GoBack />
      <iframe className="w-full h-full" src={`./${pdf}.pdf`}></iframe>
    </div>
  );
}
