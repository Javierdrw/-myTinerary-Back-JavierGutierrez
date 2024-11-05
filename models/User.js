import { Schema, model } from "mongoose";
import "./Itinerary.js";

let collection = "Users";
let schema = new Schema({
  Photo: { type: String, required: true },
  Name: { type: String, required: true },
  Email: { type: String, required: true },
  Password: { type: String, required: true },
  category: { type: String, enum: ["collaborator", "client"], required: true },
  itineraries: [{ type: Schema.Types.ObjectId, ref: "Itineraries" }],
});

let User = model(collection, schema);

export default User;
