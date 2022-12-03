import dayjs from "dayjs";
import { messagesCollection, participantsCollection } from "../database/db.js";


export async function postParticipants( req, res){

    const {name} = req.body

    const participantFormat = ({
        name,
        lastStatus: Date.now(),
    })

    const messageFormat = ({
        from: name,
        to: "Todos",
        text: "Entrou na sala...",
        type: "status",
        time: dayjs().format("HH:mm:ss")
    })

    console.log("oooo porra")
    console.log(participantFormat)

    try{

        await participantsCollection.insertOne(participantFormat)
        res.status(201).send("Successfully added participant")

        await messagesCollection.insertOne(messageFormat)
        res.send(201).send("Participant successfully joined the room...")

    }catch(err){
        console.error(err);
    }
}

export async function getParticipants(req, res){

    try{
        const showParticipants = await participantsCollection.find({}).toArray()
        return res.send(showParticipants)
    } catch (error){
        console.log(error);
        res.sendStatus(500)
    }
}