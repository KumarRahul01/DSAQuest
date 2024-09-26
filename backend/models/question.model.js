import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  quesId: {
    type: Number,
    required: true
  },
  tag: {
    type: String,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    required: true
  },
});

export const arrayquesModel = mongoose.model("arrayQuestions", questionSchema);

export const stringQuesModel = mongoose.model("StringQuestions", questionSchema);

export const twoDarrayQuesModel = mongoose.model("TwoDArrayQuestions", questionSchema);

export const searchingSortingQuesModel = mongoose.model("SearchingSortingQuestions", questionSchema);

export const backtrackingQuesModel = mongoose.model("backtrackingQuestions", questionSchema);

export const linkedListQuesModel = mongoose.model("linkedListQuestions", questionSchema);

export const stackNQueuesQuesModel = mongoose.model("stackNQueuesQuestions", questionSchema);

export const greedyQuesModel = mongoose.model("greedyQuestions", questionSchema);