import express from "express";
import { getstatus, savestatus } from "../controllers/isChedked.controller.js";


const router = express.Router();

router.post("/savestatus", savestatus);
router.get("/get-status", getstatus);

export default router;