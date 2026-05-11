import Contact from "../models/Contact.js";
import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

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

    // Send Email using Resend
    await resend.emails.send({
      from:
        "Portfolio <onboarding@resend.dev>",

      to: "hireamit.dev@gmail.com",

      subject:
        "🚀 New Portfolio Contact Message",

      html: `
        <div style="font-family:Arial;padding:20px;">
          <h2>New Portfolio Contact</h2>

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
    console.log(error);

    return res.status(500).json({
      success: false,
      message:
        "Failed to send message",
    });
  }
};