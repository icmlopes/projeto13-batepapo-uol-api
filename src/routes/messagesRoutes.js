import { Router } from "express"
import { getMessage, postMessage } from "../controllers/messagesController.js"
import { messagesSchemaValidation } from "../middlewares/messageValidationMiddleware.js"


const router = Router()

router.post("/messages",messagesSchemaValidation, postMessage)
router.get("/messages", getMessage)


export default router