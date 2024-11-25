import joi from "joi-oid";

export const schemaUpdateAuth = joi.object({
  Email: joi.string().email().required().messages({
    "string.base": "Email must be a string",
    "string.email": "Email must be a valid email address",
    "any.required": "Email is required",
  }),
  Password: joi
    .string()
    .min(8)
    .max(50)
    .required()
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*+?&])[A-Za-z\d@$!%*?&+]{8,50}$/
    )
    .messages({
      "string.base": "Password must be a string",
      "string.min": "Password must have a minimum of 8 characters",
      "string.max": "Password must have a maximum of 50 characters",
      "any.required": "Password is required",
      "string.pattern.base":
        "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character (@, $, !, %, *, ?, &, +).",
      }),
});
