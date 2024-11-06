import { Schema, model } from "mongoose";
import "./City.js";
import "./User.js";

let collection = "Itineraries";
let schema = new Schema(
  {
    photo: { type: String, required: true },
    price: {
      type: {
        worth: { type: Number, required: true },
        currency: { type: String, required: true },
        amount: { type: Number, required: true },
      },
      required: true,
    },
    name: { type: String, required: true },
    duration: { type: Number, required: true },
    likes: { type: Number, required: true },
    hashtags: { type: String, required: true },
    city: { type: Schema.Types.ObjectId, ref: "Cities", required: true },
    comment: { type: String },
    user: { type: Schema.Types.ObjectId, ref: "Users", required: true },
  },
  {
    timestamps: true,
  }
);

let Itinerary = model(collection, schema);

export default Itinerary;
