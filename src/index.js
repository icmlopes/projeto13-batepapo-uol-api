import express from "express";
import cors from "cors";
import router from "./routes/participantsRoutes.js"
import participantRouter from "./routes/participantsRoutes.js"
import dotenv from "dotenv"
dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());

app.use(router)
app.use(participantRouter)



app.listen(5000, () => console.log("Server running in port: 5000"))