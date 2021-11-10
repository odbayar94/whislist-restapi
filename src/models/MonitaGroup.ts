import mongoose, { Schema, model, Model, Document } from "mongoose";
import { ObjectId } from "mongodb";
import { IMonitaGroup } from "../interfaces";

const MonitaGroupSchema = new Schema(
  {
    createdUser: {
      type: {
        name: { type: String, required: false },
        email: { type: String, required: false },
        image: { type: String, required: false },
      },
    },
    name: { type: String, required: true },
    description: { type: String, required: false },
    endDate: { type: Date },
    selectedUsers: {
      type: [
        {
          userId: { type: String, required: false },
          email: { type: String, required: true },
          name: { type: String, required: false },
          imageUrl: { type: String, required: false },
          active: { type: Boolean, default: false },
        },
      ],
    },
    createdBy: { type: ObjectId, ref: "users" },
    shortenUri: { type: String },
  },
  {
    timestamps: true,
  }
);

const MonitaGroup: Model<IMonitaGroup> = model(
  "MonitaGroup",
  MonitaGroupSchema
);
export default MonitaGroup;
