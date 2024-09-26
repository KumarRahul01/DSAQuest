import { arrayquesModel, backtrackingQuesModel, greedyQuesModel, linkedListQuesModel, searchingSortingQuesModel, stackNQueuesQuesModel, stringQuesModel, twoDarrayQuesModel } from "../models/question.model.js";

export const getArraysQuestions = async (req, res) => {
  try {
    const ans = await arrayquesModel.find();  // Await the result of the query
    if (ans) {
      res.status(200).json(ans); // Send the data as JSON response
    }
  } catch (err) {
    res.status(500).json({ error: "An error occurred" });
  }
}

export const getStringsQuestions = async (req, res) => {
  try {
    const ans = await stringQuesModel.find();  // Await the result of the query
    res.status(200).json(ans);  // Send the data as JSON response
  } catch (err) {
    res.status(500).json({ error: "An error occurred" });
  }
}

// app.get("/api/get-arrays-1", async (req, res) => {
//   try {
//     const ans = await arrayquesModel.find({quesId: 1});  // Await the result of the query
//     res.json(ans);  // Send the data as JSON response
//   } catch (err) {
//     res.status(500).json({ error: "An error occurred" });
//   }
// })
// }

export const get2darraysquestions = async (req, res) => {
  try {
    const ans = await twoDarrayQuesModel.find();  // Await the result of the query
    res.status(200).json(ans);  // Send the data as JSON response
  } catch (err) {
    res.status(500).json({ error: "An error occurred" });
  }
}

export const searchingSortingQuestions = async (req, res) => {
  try {
    const ans = await searchingSortingQuesModel.find(); // Await the result of the query
    res.status(200).json(ans);  // Send the data as JSON response
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
}

export const backtrackingQuestions = async (req, res) => {
  try {
    const ans = await backtrackingQuesModel.find();
    res.status(200).json(ans);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
}

export const linkedListQuestions = async (req, res) => {
  try {
    const ans = await linkedListQuesModel.find();
    res.status(200).json(ans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const stackNQueuesQuestions = async (req, res) => {
  try {
    const ans = await stackNQueuesQuesModel.find();
    res.status(200).json(ans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const greedyQuestions = async (req, res) => {
  try {
    const ans = await greedyQuesModel.find();
    res.status(200).json(ans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// module.exports = {getArrayQuestions}