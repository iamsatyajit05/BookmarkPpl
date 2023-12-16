import { Schema, model } from "mongoose";

const profileSchema = new Schema(
  {
    name: { type: String, required: true },
    plateform: { type: String, required: true },
    description: {type: String, required: true},
    url: {type: String, required: true},
    createdBy: {type: String, require: true}
  },
  { timestamps: true }
);

export default model("Profile", profileSchema);