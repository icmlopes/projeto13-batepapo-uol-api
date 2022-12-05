import { Router } from "express";
import { postStatus } from "../controllers/statusController.js";
import { statusValidation } from "../middlewares/statusValidationMiddleware.js";

const router = Router();

router.post("/status", statusValidation, postStatus);

export default router;
