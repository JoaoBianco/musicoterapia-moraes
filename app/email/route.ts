import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const nodemailer = require("nodemailer");

  const data = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    secureConnection: false,
    port: 587,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    tls: {
      ciphers: "SSLv3",
    },
  });

  const mailData = {
    from: process.env.EMAIL,
    // to: process.env.SEND_TO_EMAIL,
    to: "joaops.bianco@gmail.com",
    subject: `Assunto: ${data.subject} - Email de: ${data.email}`,
    text: data.message,
  };

  transporter.sendMail(mailData, function (err: any, info: any) {
    if (err) {
      return new NextResponse(err.toString(), { status: 500 });
    } else {
      return new NextResponse(info.toString(), { status: 200 });
    }
  });
  return new NextResponse("Email sent", { status: 200 });
}
