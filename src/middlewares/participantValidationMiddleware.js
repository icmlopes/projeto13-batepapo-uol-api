import { participantsCollection } from "../database/db.js"
import { participantSchema } from "../model/participantModel.js"


export async function participantsSchemaValidation(req, res, next) {

    const {name} = req.body

    const {error} = participantSchema.validate({name}, {abortEarly: false})

    if(error){
        const errors = error.details.map((detail) => detail.message)
        return res.status(422).send(errors)
    }

    const existingNickName = await participantsCollection.findOne({name})

    console.log(existingNickName)

    if(existingNickName){
        return res.status(409).send("Esse nome já está sendo utilizado! Escolha outro! =)")
    }

    next()
}