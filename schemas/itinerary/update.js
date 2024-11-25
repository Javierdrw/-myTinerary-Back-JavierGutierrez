import joi from "joi-oid";

export const schemaUpdateItinerary = joi.object({
    photo: joi.string().min(3).max(100).messages({
      "string.base": "Photo is required",
      "string.min": "Photo must be at least 3 characters long",
      "string.max": "Photo cannot be longer than 100 characters",
    }),
    price: joi.object({
      worth: joi.number().min(1).max(100000000).messages({
        "number.base": "Worth is required",
        "number.min": "Worth must be at least 1",
        "number.max": "Worth cannot be greater than 100000000",
      }),
      currency: joi.string().min(3).max(20).messages({
        "string.base": "Currency is required",
        "string.min": "Currency must be at least 3 characters long",
        "string.max": "Currency cannot be longer than 20 characters",
      }),
      amount: joi.number().min(1).max(1000000).messages({
        "number.base": "Amount is required",
        "number.min": "Amount must be at least 1",
        "number.max": "Amount cannot be greater than 1000000",
      }),
    }),
    name: joi.string().min(3).max(50).messages({
      "string.base": "Name is required",
      "string.min": "Name must be at least 3 characters long",
      "string.max": "Name cannot be longer than 50 characters",
    }),
    duration: joi.number().min(1).max(1000).messages({
      "number.base": "Duration is required",
      "number.min": "Duration must be at least 1",
      "number.max": "Duration cannot be greater than 1000",
    }),
    likes: joi.number().min(0).max(1000000).messages({
      "number.base": "Likes is required",
      "number.min": "Likes must be at least 0",
      "number.max": "Likes cannot be greater than 1000000",
    }),
    hashtags: joi.string().min(3).max(20).messages({
      "string.base": "Hashtags is required",
      "string.min": "Hashtags must be at least 3 characters long",
      "string.max": "Hashtags cannot be longer than 20 characters",
    }),
    city: joi.objectId().messages({
      "objectid.base": "City is required",
    }),
    comment: joi.string().allow(null, "").optional().messages({
      "string.base": "Comment must be a string",
    }),
    user: joi.objectId().messages({
      "objectid.base": "User is required",
    }),
  });