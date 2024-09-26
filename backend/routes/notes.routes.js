import express from "express";
import { getNote, saveNote } from "../controllers/note.controllers.js";

const router = express.Router();

router.post("/savenote", saveNote);
router.get("/getnote", getNote);

export default router;