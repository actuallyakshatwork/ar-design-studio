"use server";

import client from "@/mail";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendEmail(data: FormData) {
  try {
    await client.sendMail({
      to: ["antararoydesignstudio@gmail.com"],
      from: process.env.MAIL_USER,
      subject: "New Query from " + data.name,
      html: `
        <h2>You have received a new message:</h2>
        <p><strong>From:</strong> ${data.name}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
    });
    return { status: 200 };
  } catch (error) {
    console.error("Error sending email:", error);
    return { status: 500 };
  }
}
