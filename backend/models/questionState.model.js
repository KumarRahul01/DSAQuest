import mongoose from 'mongoose';

const QuestionStateSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  questionId: {
    type: Number,
    required: true,
  },
  isMarkedForRevision: {
    type: Boolean,
    default: false,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

// Middleware to remove document if both flags are false
QuestionStateSchema.pre('save', async function(next) {
  if (!this.isMarkedForRevision && !this.isCompleted) {
    // Delete the document if both flags are false
    await QuestionState.deleteOne({ _id: this._id });
  }
  next();
});

// Ensure uniqueness per user, topic, and questionId
// QuestionStateSchema.index({ userId: 1, topic: 1, questionId: 1 }, { unique: true });

export const QuestionState = mongoose.model('QuestionState', QuestionStateSchema);