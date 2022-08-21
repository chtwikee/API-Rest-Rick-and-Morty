import { Schema, model } from "mongoose";
import { characterModel } from "./characterSchema.js";

const userSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  image: { type: String, required: true },
  characters: { type: [characterModel], required: true }
});

export const userModel = model("User", userSchema);