import { Router } from "express";
import {
  getParticipants,
  postParticipants,
} from "../controllers/participantsController.js";
import { participantsSchemaValidation } from "../middlewares/participantValidationMiddleware.js";

const router = Router();

router.post("/participants", participantsSchemaValidation, postParticipants);
router.get("/participants", getParticipants);

export default router;
