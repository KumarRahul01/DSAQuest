import { QuestionState } from "../models/questionState.model.js"; // Adjust the path as necessary

export const deleteUnnecessaryStates = async () => {
  try {
    const result = await QuestionState.deleteMany({
      isMarkedForRevision: false,
      isCompleted: false,
    });
    console.log(`Deleted ${result.deletedCount} documents.`);
  } catch (error) {
    console.error('Error deleting unnecessary states:', error);
  }
};