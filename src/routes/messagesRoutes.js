import joi from "joi"

export const messageSchema =  joi.object({
    from: joi.string().min(3).required(),
    to: joi.string(),
    text: joi.string(),
    type: joi.string(),
    time: joi.string().required()
})