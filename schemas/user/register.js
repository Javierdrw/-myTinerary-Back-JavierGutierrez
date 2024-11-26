import joi from "joi-oid";

export const schemaCreateUser = joi.object({
  Photo: joi.string().required().uri().min(3).max(300).messages({
    "string.base": "Photo is required",
    "string.uri": "Photo must be a valid URL",
    "string.min": "Photo must be at least 3 characters long",
    "string.max": "Photo cannot be longer than 300 characters",
    "any.required": "Photo is required",
  }),
  Name: joi.string().required().min(3).max(20).messages({
    "string.base": "Name is required",
    "string.min": "Name must be at least 3 characters long",
    "string.max": "Name cannot be longer than 20 characters",
    "any.required": "Name is required",
  }),
  LastName: joi.string().required().min(3).max(20).messages({
    "string.base": "LastName is required",
    "string.min": "LastName must be at least 3 characters long",
    "string.max": "LastName cannot be longer than 20 characters",
    "any.required": "LastName is required",
  }),
  Email: joi.string().required().email().messages({
    "string.base": "Email is required",
    "string.email": "Email must be a valid email address",
    "any.required": "Email is required",
  }),
  Password: joi
    .string()
    .required()
    .min(8)
    .max(20)
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*+?&])[A-Za-z\d@$!%*?&+]{8,50}$/
    )
    .messages({
      "string.base": "Password is required",
      "string.min": "Password must be at least 8 characters long",
      "string.max": "Password cannot be longer than 20 characters",
      "any.required": "Password is required",
      "string.pattern.base":
        "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character (@, $, !, %, *, ?, &, +).",
    }),
  category: joi.string().required().valid("collaborator", "client").messages({
    "string.base": "Category is required",
    "string.valid": "Category must be either 'collaborator' or 'client'",
    "any.required": "Category is required",
  }),
  itineraries: joi.array().optional().items(joi.objectId()).messages({
    "array.base": "Itineraries must be an array of ObjectIds",
  }),
  online: joi.boolean().default(true).optional().messages({
    "boolean.base": "Online must be a boolean value",
  }),
  country: joi.string().min(3).max(20).messages({
    "string.base": "Country is required",
    "string.min": "Country must be at least 3 characters long",
    "string.max": "Country cannot be longer than 20 characters",
    "any.required": "Country is required",
  }),
});
