import express from "express";
import cors from "cors";
import router from "./routes/participantsRoutes.js"
import participantRouter from "./routes/participantsRoutes.js"
import messagesRouter from "./routes/messagesRoutes.js"
import statusRouter from "./routes/statusRoutes.js"
import { removeParticipants } from "./controllers/participantsController.js"

const app = express();
app.use(cors());
app.use(express.json());

app.use(router)
app.use(participantRouter)
app.use(messagesRouter)
app.use(statusRouter)

setInterval(removeParticipants, 15000)

app.listen(5000, () => console.log("Server running in port: 5000"))