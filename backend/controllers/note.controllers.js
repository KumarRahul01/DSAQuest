import { Note } from "../models/notes.model.js";

export const saveNote = async (req, res) => {
  const { quesId, userId, tag, note } = req.body;
  // console.log(quesId, userId, tag, note)

  try {
    // Find the existing note for this question and user
    let existingNote = await Note.findOne({ quesId, userId, tag });

    if (existingNote) {
      // Update the note if it exists
      existingNote.note = note;
      await existingNote.save();
      res.status(201).json({ message: "Note updated successfully!" });
    } else {
      // Create a new note if not exists
      const newNote = new Note({
        quesId,
        userId,
        tag,
        note
      });
      await newNote.save()
      res.status(200).json({ message: "Note saved successfully!" })
    }

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


export const getNote = async (req, res) => {
  const { quesId, userId, tag } = req.query;
  try {
    const note = await Note.findOne({ quesId, userId, tag });
    if (note) {
      res.status(200).json(note);
    } else {
      res.status(404).json({ message: "No note found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving note", error });
  }
}