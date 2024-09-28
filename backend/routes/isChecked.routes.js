import express from "express";
import { getstatus, savestatus } from "../controllers/isChedked.controller.js";


const router = express.Router();

router.post("/save-status", savestatus);
router.get("/get-status/:userId", getstatus);

export default router;