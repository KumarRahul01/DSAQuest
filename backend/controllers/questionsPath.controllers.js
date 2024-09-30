import { arrayquesModel, backtrackingQuesModel, binarySearchTreeQuesModel, binaryTreesQuesModel, bitManipulationQuesModel, dpQuesModel, graphQuesModel, greedyQuesModel, heapsAndHashingQuesModel, linkedListQuesModel, searchingSortingQuesModel, segmentTreesQuesModel, stackNQueuesQuesModel, stringQuesModel, triesQuesModel, twoDarrayQuesModel } from "../models/questionsPath.model.js";

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

//updated

export const binaryTreesQuestions = async (req, res) => {
  try {
    const ans = await binaryTreesQuesModel.find();
    res.status(200).json(ans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const binarySearchTreeQuestions = async (req, res) => {
  try {
    const ans = await binarySearchTreeQuesModel.find();
    res.status(200).json(ans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const heapsAndHashingQuestions = async (req, res) => {
  try {
    const ans = await heapsAndHashingQuesModel.find();
    res.status(200).json(ans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const graphQuestions = async (req, res) => {
  try {
    const ans = await graphQuesModel.find();
    res.status(200).json(ans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const triesQuestions = async (req, res) => {
  try {
    const ans = await triesQuesModel.find();
    res.status(200).json(ans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const dpQuestions = async (req, res) => {
  try {
    const ans = await dpQuesModel.find();
    res.status(200).json(ans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const bitManipulationQuestions = async (req, res) => {
  try {
    const ans = await bitManipulationQuesModel.find();
    res.status(200).json(ans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const segmentTreesQuestions = async (req, res) => {
  try {
    const ans = await segmentTreesQuesModel.find();
    res.status(200).json(ans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
