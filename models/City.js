import { Schema, model } from "mongoose";

let collection = "Cities";
let schema = new Schema({
  Name: { type: String, required: true },
  Photo: { type: String, required: true },
  Country: { type: String, required: true },
  Continent: { type: String, required: true },
  Description: { type: String, required: true },
  Currency: { type: String, required: true },
  Language: { type: String, required: true },
  Population: { type: Number, required: true },
  Economy: { type: String, required: true },
  Security: { type: String, required: true },
  Climate: { type: String, required: true },
  History: { type: String, required: true },
});

let City = model(collection, schema);

export default City;
