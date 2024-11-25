import joi from "joi-oid";

export const schemaReadCity = joi.object({
    _id: joi.objectId().required().messages({
        "objectid.base": "Property must be a valid ObjectId",
        "any.required": "Property is required",
    }),
})