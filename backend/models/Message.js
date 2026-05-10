import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    name: String,

    email: String,

    subject: String,

    body: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Message",
  messageSchema
);