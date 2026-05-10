import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";

export const submitContact = async (
  req,
  res
) => {
  try {
    const {
      name,
      email,
      message,
    } = req.body;

    // Save to MongoDB
    const newContact =
      await Contact.create({
        name,
        email,
        message,
      });
// console.log(process.env.EMAIL_USER);
// console.log(process.env.EMAIL_PASS);
// console.log("BODY:", req.body);
    // Nodemailer Transport
    const transporter =
      nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

    // Email Template
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject:
        "🚀 New Portfolio Contact Message",

      html: `
        <div style="font-family:Arial;padding:20px;">
          <h2>New Contact Form Submission</h2>

          <p>
            <strong>Name:</strong>
            ${name}
          </p>

          <p>
            <strong>Email:</strong>
            ${email}
          </p>

          <p>
            <strong>Message:</strong>
          </p>

          <div style="background:#f5f5f5;padding:15px;border-radius:8px;">
            ${message}
          </div>
        </div>
      `,
    });

    res.status(201).json({
      success: true,
      message:
        "Message sent successfully",
      data: newContact,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message:
        "Failed to send message",
    });
  }
};