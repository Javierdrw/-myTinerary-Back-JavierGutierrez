import joi from "joi-oid";

export const schemaCreateCity = joi.object({
  name: joi.string().required().min(3).max(20).messages({
    "string.base": "Name is required",
    "string.min": "Name must be at least 3 characters long",
    "string.max": "Name cannot be longer than 20 characters",
    "any.required": "Name is required",
  }),
  photo: joi.string().required().min(3).max(100).messages({
    "string.base": "Photo is required",
    "string.min": "Photo must be at least 3 characters long",
    "string.max": "Photo cannot be longer than 100 characters",
    "any.required": "Photo is required",
  }),
  country: joi.string().required().min(3).max(20).messages({
    "string.base": "Country is required",
    "string.min": "Country must be at least 3 characters long",
    "string.max": "Country cannot be longer than 20 characters",
    "any.required": "Country is required",
  }),
  continent: joi.string().required().min(3).max(20).messages({
    "string.base": "Continent is required",
    "string.min": "Continent must be at least 3 characters long",
    "string.max": "Continent cannot be longer than 20 characters",
    "any.required": "Continent is required",
  }),
  description: joi.string().required().min(3).max(4000).messages({
    "string.base": "Description is required",
    "string.min": "Description must be at least 3 characters long",
    "string.max": "Description cannot be longer than 4000 characters",
    "any.required": "Description is required",
  }),
  currency: joi.string().required().min(3).max(20).messages({
    "string.base": "Currency is required",
    "string.min": "Currency must be at least 3 characters long",
    "string.max": "Currency cannot be longer than 20 characters",
    "any.required": "Currency is required",
  }),
  language: joi.string().required().min(3).max(20).messages({
    "string.base": "Language is required",
    "string.min": "Language must be at least 3 characters long",
    "string.max": "Language cannot be longer than 20 characters",
    "any.required": "Language is required",
  }),
  population: joi.number().required().min(10).max(999999999).messages({
    "number.base": "Population is required",
    "number.min": "Population must be at least 10",
    "number.max": "Population cannot be greater than 9999999",
    "any.required": "Population is required",
  }),
  economy: joi.string().required().min(3).max(20).messages({
    "string.base": "Economy is required",
    "string.min": "Economy must be at least 3 characters long",
    "string.max": "Economy cannot be longer than 20 characters",
    "any.required": "Economy is required",
  }),
  security: joi.string().required().min(3).max(200).messages({
    "string.base": "Security is required",
    "string.min": "Security must be at least 3 characters long",
    "string.max": "Security cannot be longer than 200 characters",
    "any.required": "Security is required",
  }),
    climate: joi.string().required().min(3).max(200).messages({
      "string.base": "Climate is required",
      "string.min": "Climate must be at least 3 characters long",
      "string.max": "Climate cannot be longer than 200 characters",
      "any.required": "Climate is required",
    }),
    history: joi.string().required().min(3).max(4000).messages({
      "string.base": "History is required",
      "string.min": "History must be at least 3 characters long",
      "string.max": "History cannot be longer than 4000 characters",
      "any.required": "History is required",
    }),
  });