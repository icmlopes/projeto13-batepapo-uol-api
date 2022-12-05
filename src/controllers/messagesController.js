import dayjs from "dayjs";
import { messagesCollection } from "../database/db.js";

export async function postMessage(req, res) {

    const message = req.body  

    const messageFormat = ({
        from: req.headers.user,
        to: message.to,
        text: message.text,
        type: message.type,
        time: dayjs().format("HH:mm:ss")
    })

    console.log("eita")
    console.log(messageFormat)          
    try{

        await messagesCollection.insertOne(messageFormat)
        res.status(201).send("Message send successfully")

            
    }catch(error){
        console.log(error); 
        res.sendStatus(500)
    }
}

export async function getMessage(req, res) {

    const  limit  = parseInt(req.query.limit)
    const participantNickName = req.header("user")

    try{  

        const showMessages = await messagesCollection.find({}).toArray()

        const filteredMessage = showMessages.filter((message) => {
            return(
            message.to === "todos" || message.from === participantNickName || message.to === participantNickName || message.type === "message")
        })               

        res.send(filteredMessage.slice(-limit))
        
        console.log("Aaaaaaa")
        console.log(filteredMessage)

    } catch (error){
        console.log(error);
        res.sendStatus(500)
    }

}