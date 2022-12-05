import { participantsCollection } from "../database/db.js";
import { messageSchema } from "../model/messageModel.js";

export async function messagesSchemaValidation(req, res, next) {
  const { to, text, type } = req.body;

  const { user } = req.headers;

  try {
    if (!user) {
      res.status(422).send("User não deve ser vazio.");
      return;
    }

    const existingParticipant = await participantsCollection.findOne({
      name: user,
    });

    console.log(existingParticipant);

    if (existingParticipant === null) {
      res.status(422).send("Usuário inexistente.");
      return;
    }

    const { error } = messageSchema.validate(
      { to, text, type },
      { abortEarly: false }
    );

    if (error) {
      const errors = error.details.map((detail) => detail.message);
      return res.status(422).send(errors);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }

  next();
}
