"use client";

import React, { useState } from "react";
import Wrapper from "../shared/Wrapper";
import Separator from "../shared/Separator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareInstagram,
  faSquareWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    clearFields();
  }

  function clearFields() {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }

  return (
    <Wrapper title="Contacto">
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
          <button className="text-sm bg-white text-black self-end px-6 py-4 shadow-md font-semibold">
            Enviar
          </button>
        </form>
        <Wrapper
          customClass="px-0"
          title="TAMBIÉN ESTAMOS AQUÍ:"
          childrenClass="flex gap-16 items-center justify-center"
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
  );
}
