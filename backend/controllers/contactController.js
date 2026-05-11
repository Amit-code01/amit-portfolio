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

    // Save message to MongoDB
    const newContact =
      await Contact.create({
        name,
        email,
        message,
      });

    // Gmail SMTP Transport
    const transporter =
      nodemailer.createTransport({
        host: "smtp.gmail.com",

        port: 587,

        secure: false,

        auth: {
          user: process.env.EMAIL_USER,

          pass: process.env.EMAIL_PASS,
        },

        tls: {
          rejectUnauthorized: false,
        },

        connectionTimeout: 10000,

        greetingTimeout: 10000,

        socketTimeout: 10000,
      });

    // Verify SMTP connection
    await transporter.verify();

    console.log(
      "SMTP Connected Successfully"
    );

    // Send Email
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,

      to: process.env.EMAIL_USER,

      subject:
        "🚀 New Portfolio Contact Message",

      html: `
        <div style="font-family:Arial;padding:20px;">
          
          <h2>
            New Portfolio Contact
          </h2>

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

          <div style="
            background:#f5f5f5;
            padding:15px;
            border-radius:8px;
            line-height:1.6;
          ">
            ${message}
          </div>

        </div>
      `,
    });

    return res.status(201).json({
      success: true,

      message:
        "Message sent successfully",

      data: newContact,
    });

  } catch (error) {
    console.log(
      "CONTACT ERROR:",
      error
    );

    return res.status(500).json({
      success: false,

      message:
        "Failed to send message",
    });
  }
};