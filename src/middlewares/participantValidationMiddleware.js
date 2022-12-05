import { participantsCollection } from "../database/db.js";
import { participantSchema } from "../model/participantModel.js";

export async function participantsSchemaValidation(req, res, next) {
  const { name } = req.body;

  try {
    const { error } = participantSchema.validate(
      { name },
      { abortEarly: false }
    );

    if (error) {
      const errors = error.details.map((detail) => detail.message);
      return res.status(422).send(errors);
    }
    const existingNickName = await participantsCollection.findOne({ name });

    if (existingNickName !== null) {
      return res
        .status(409)
        .send("Esse nome já está sendo utilizado! Escolha outro! =)");
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }

  next();
}
