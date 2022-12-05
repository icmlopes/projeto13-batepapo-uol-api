import { participantsCollection } from "../database/db.js";

export async function statusValidation(req, res, next) {
  const { user } = req.headers;

  if (!user) {
    res.status(404).send("User não deve ser vazio.");
    return;
  }

  const existingParticipant = await participantsCollection.findOne({
    name: user,
  });

  if (!existingParticipant) {
    res.status(422).send("Usuário não cadastrado.");
    return;
  }

  next();
}
