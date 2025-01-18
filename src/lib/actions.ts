"use server";

import { ContactFormSchema } from "@/schemas";
import nodemailer from "nodemailer";
import { z } from "zod";

type ContactFormInputs = z.infer<typeof ContactFormSchema>;

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data);

  if (result.error) {
    return { error: result.error.format() };
  }

  try {
    const { name, email, message } = result.data;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_APP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `Portfolio ${process.env.NODEMAILER_EMAIL}`,
      to: process.env.MY_WORK_MAIL,
      //   replyTo: email,
      cc: email,
      subject: `New message from ${name}!`,
      text: `Name:\n${name}\n\nEmail:\n${email}\n\nMessage:\n${message}`,
    });

    console.log(info);
    if (!info.accepted.length) {
      throw new Error("Unable to send email");
    }

    return { success: true };
  } catch (error) {
    return { error };
  }
}
