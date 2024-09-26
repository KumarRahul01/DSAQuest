import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
  quesId: {
    type: Number, // This can be an ID or slug of the question
    required: true
  },
  userId: {
    type: String, // Store the userId if notes are user-specific
    required: true
  },
  tag: {
    type: String,
    required: true
  },
  note: {
    type: String,
    default: ''
  }
})

export const Note = mongoose.model('Note', NoteSchema);