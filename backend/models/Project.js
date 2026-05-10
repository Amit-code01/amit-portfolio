import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: String,

    description: String,

    year: String,

    tags: [String],

    githubLink: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Project",
  projectSchema
);