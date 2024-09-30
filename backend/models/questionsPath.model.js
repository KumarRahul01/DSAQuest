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

// updated

export const binaryTreesQuesModel = mongoose.model("binaryTreesQuestions", questionSchema);

export const binarySearchTreeQuesModel = mongoose.model("binarySearchTreeQuestions", questionSchema);

export const heapsAndHashingQuesModel = mongoose.model("heapsAndHashingQuestions", questionSchema);

export const graphQuesModel = mongoose.model("graphQuestions", questionSchema);

export const triesQuesModel = mongoose.model("triesQuestions", questionSchema);

export const dpQuesModel = mongoose.model("dpQuestions", questionSchema);

export const bitManipulationQuesModel = mongoose.model("bitManipulationQuestions", questionSchema);

export const segmentTreesQuesModel = mongoose.model("segmentTreesQuestions", questionSchema);