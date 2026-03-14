import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, company, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const adminAddress = "admin@amechecleaning.ca";
    const internalCopyAddress = "amechecleaning@gmail.com";

    const textBody = `
New commercial cleaning enquiry from the website.

Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Company: ${company || "N/A"}

Message:
${message}
`;

    await transporter.sendMail({
      to: adminAddress,
      from: adminAddress,
      replyTo: email,
      subject: "New commercial cleaning enquiry from website",
      text: textBody,
    });

    await transporter.sendMail({
      to: internalCopyAddress,
      from: adminAddress,
      replyTo: email,
      subject: "Copy of website enquiry",
      text: textBody,
    });

    await transporter.verify();

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error sending contact email", error);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 },
    );
  }
}

