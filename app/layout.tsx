import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Musicoterapia Moraes - Musica, Terapia & Movimiento en Asturias",
  description: "Musicoterapia Moraes",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} scroll-smooth bg-white-snow`}>
        {children}
      </body>
    </html>
  )
}
