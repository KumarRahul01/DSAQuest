import { QuestionState } from "../models/questionState.model.js";
import { deleteUnnecessaryStates } from "../utilities/cleanup.js";

export const saveState = async (req, res) => {
  const { userId, topic, questionId, isMarkedForRevision, isCompleted } = req.body;

  try {
    // Save or update the question state
    const questionState = await QuestionState.findOneAndUpdate(
      { userId, topic, questionId },
      { isMarkedForRevision, isCompleted },
      { upsert: true, new: true }
    );

    // Call the cleanup function after saving
    await deleteUnnecessaryStates();
    return res.status(200).json(questionState);

  } catch (error) {
    console.error('Error saving state:', error);
    return res.status(500).send('Server error');
  }

}

export const getState = async (req, res) => {
  const { topic, userId } = req.params;

  try {
    // Fetch all question states for the user and topic
    const questionStates = await QuestionState.find({ userId, topic });
    return res.status(200).json(questionStates);

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
}