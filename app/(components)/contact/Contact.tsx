"use client"

import React, { useEffect, useState } from "react"
import Wrapper from "../shared/Wrapper"
import Separator from "../shared/Separator"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faSquareFacebook,
  faSquareInstagram,
  faSquareWhatsapp,
} from "@fortawesome/free-brands-svg-icons"
import { toast } from "react-toastify"
import ReactCaptcha from "modern-react-captcha"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [disabled, setDisabled] = useState(true)
  const [renderCaptcha, setRenderCaptcha] = useState(true)

  async function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    const env = process.env.NODE_ENV
    const url =
      env === "development"
        ? "http://localhost:3000/email"
        : "https://musicoterapia-moraes.vercel.app/email"
    e.preventDefault()
    setRenderCaptcha(false)
    setTimeout(() => {
      setRenderCaptcha(true)
    }, 1)
    if (!name || !email || !subject || !message) {
      setDisabled(true)
      return toast("Por favor, rellene todos los campos", {
        type: "error",
        autoClose: 2000,
      })
    }
    toast("Enviando mensaje...", { type: "info", autoClose: 2000 })
    fetch(url, {
      body: JSON.stringify({ name, email, subject, message }),
      method: "POST",
    })
      .then((res) => {
        if (res.ok) {
          setTimeout(() => {
            toast("Mensaje enviado", { type: "success", autoClose: 2000 })
          }, 1000)
        }
      })
      .catch((err) => {
        setTimeout(() => {
          toast("Error al enviar el mensaje", {
            type: "error",
            autoClose: 2000,
          })
        }, 1000)
      })
    clearFields()
  }

  function clearFields() {
    setName("")
    setEmail("")
    setSubject("")
    setMessage("")
    const placeholderText = document.querySelector(
      ".modern-react-captcha__inputField"
    )
    if (placeholderText) {
      placeholderText.innerHTML = ""
    }
    setDisabled(true)
  }

  const handleSuccess = () => {
    setDisabled(false)
  }
  const handleFailure = () => {
    setDisabled(true)
  }

  useEffect(() => {
    const placeholderText = document.querySelector(
      ".modern-react-captcha__inputField"
    )
    placeholderText?.setAttribute("placeholder", "Introduce el captcha")
  })

  return (
    <Wrapper title="Contacto" id="contacto">
      <div className="flex flex-col md:flex-row justify-between gap-32 md:gap-4">
        <form
          onSubmit={sendEmail}
          className="flex flex-col flex-1 gap-4 bg-custom-blue-500 p-4 shadow-lg max-w-[600px]"
        >
          <div className="text-white flex flex-col gap-1 ">
            <label htmlFor="name">Nombre:</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 text-black"
              name="name"
              type="text"
            />
          </div>
          <div className="text-white flex flex-col gap-1 ">
            <label htmlFor="email">Email:</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 text-black"
              name="email"
              type="text"
            />
          </div>
          <div className="text-white flex flex-col gap-1 ">
            <label htmlFor="subject">Asunto:</label>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="p-2 text-black"
              name="subject"
              type="text"
            />
          </div>
          <div className="text-white flex flex-col gap-1">
            <label htmlFor="message">Mensaje:</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="max-h-44 min-h-16 text-black p-4"
              name="message"
            />
          </div>
          <div className="flex md:flex-row flex-col justify-between relative items-start">
            {renderCaptcha ? (
              <ReactCaptcha
                charset="lns"
                length={6}
                color="black"
                bgColor="white"
                reload={true}
                reloadText="Recargar"
                handleSuccess={handleSuccess}
                handleFailure={handleFailure}
              />
            ) : null}
            <button
              disabled={disabled}
              className="text-sm bg-white text-black self-end px-6 py-4 mt-2 md:mt-0 shadow-md font-semibold my-auto disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Enviar
            </button>
          </div>
        </form>
        <Wrapper
          customClass="px-0"
          title="TAMBIÉN ESTAMOS AQUÍ:"
          childrenClass="flex gap-4 md:gap-16 items-center justify-center"
        >
          <a
            href="https://www.facebook.com/musicoterapiasturias/"
            target="_blank"
          >
            <FontAwesomeIcon
              className="text-[4rem] text-custom-blue-500"
              icon={faSquareFacebook}
            />
          </a>
          <a
            href="https://www.instagram.com/musicoterapiamoraes/"
            target="_blank"
          >
            <FontAwesomeIcon
              className="text-[4rem] text-custom-blue-500"
              icon={faSquareInstagram}
            />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=34696303543&text=Hola%20Musicoterapia%20Moraes."
            target="_blank"
          >
            <FontAwesomeIcon
              className="text-[4rem] text-custom-blue-500"
              icon={faSquareWhatsapp}
            />
          </a>
        </Wrapper>
      </div>
      <Separator showIcon={false}></Separator>
    </Wrapper>
  )
}
