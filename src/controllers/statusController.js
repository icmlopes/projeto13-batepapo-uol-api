import { participantsCollection } from "../database/db.js";

export async function postStatus(req, res) {
  const { user } = req.header;

  try {
    const findingParticipant = await participantsCollection.findOne({
      name: user,
    });

    await participantsCollection.updateOne(
      { name: user },
      { $set: { lastStatus: Date.now() } }
    );

    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
