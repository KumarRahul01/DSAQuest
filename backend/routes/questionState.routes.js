import express from "express";
import { getState, saveState } from "../controllers/questionState.controller.js";

const router = express.Router();

router.post("/saveState", saveState);
router.get("/getState/:topic/:userId", getState);

export default router;