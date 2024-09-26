import mongoose from "mongoose";

const IsCheckedSchema = new mongoose.Schema({
  quesId: {
    type: Number,
    required: true
  },
  tag: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  isChecked: {
    type: Boolean,
    required: true
  }
})

export const IsChecked = mongoose.model("IsChecked", IsCheckedSchema);