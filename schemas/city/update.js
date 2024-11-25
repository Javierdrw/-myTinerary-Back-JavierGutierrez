import joi from "joi-oid";

export const schemaUpdateCity = joi.object({
  name: joi.string().min(3).max(20).messages({
    "string.base": "Name is required",
    "string.min": "Name must be at least 3 characters long",
    "string.max": "Name cannot be longer than 20 characters",
  }),
  photo: joi.string().min(3).max(100).messages({
    "string.base": "Photo is required",
    "string.min": "Photo must be at least 3 characters long",
    "string.max": "Photo cannot be longer than 100 characters",
  }),
  country: joi.string().min(3).max(20).messages({
    "string.base": "Country is required",
    "string.min": "Country must be at least 3 characters long",
    "string.max": "Country cannot be longer than 20 characters",
  }),
  continent: joi.string().min(3).max(20).messages({
    "string.base": "Continent is required",
    "string.min": "Continent must be at least 3 characters long",
    "string.max": "Continent cannot be longer than 20 characters",
  }),
  description: joi.string().min(3).max(4000).messages({
    "string.base": "Description is required",
    "string.min": "Description must be at least 3 characters long",
    "string.max": "Description cannot be longer than 4000 characters",
  }),
  currency: joi.string().min(3).max(20).messages({
    "string.base": "Currency is required",
    "string.min": "Currency must be at least 3 characters long",
    "string.max": "Currency cannot be longer than 20 characters",
  }),
  language: joi.string().min(3).max(20).messages({
    "string.base": "Language is required",
    "string.min": "Language must be at least 3 characters long",
    "string.max": "Language cannot be longer than 20 characters",
  }),
  population: joi.number().min(10).max(999999999).messages({
    "number.base": "Population is required",
    "number.min": "Population must be at least 10",
    "number.max": "Population cannot be greater than 9999999",
  }),
  economy: joi.string().min(3).max(20).messages({
    "string.base": "Economy is required",
    "string.min": "Economy must be at least 3 characters long",
    "string.max": "Economy cannot be longer than 20 characters",
  }),
  security: joi.string().min(3).max(200).messages({
    "string.base": "Security is required",
    "string.min": "Security must be at least 3 characters long",
    "string.max": "Security cannot be longer than 200 characters",
  }),
    climate: joi.string().min(3).max(200).messages({
      "string.base": "Climate is required",
      "string.min": "Climate must be at least 3 characters long",
      "string.max": "Climate cannot be longer than 200 characters",

    }),
    history: joi.string().min(3).max(4000).messages({
      "string.base": "History is required",
      "string.min": "History must be at least 3 characters long",
      "string.max": "History cannot be longer than 4000 characters",

    }),
  });