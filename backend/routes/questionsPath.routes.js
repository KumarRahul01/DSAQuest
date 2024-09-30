import express from "express";
import {backtrackingQuestions, binarySearchTreeQuestions, binaryTreesQuestions, bitManipulationQuestions, dpQuestions, get2darraysquestions, getArraysQuestions, getStringsQuestions, graphQuestions, greedyQuestions, heapsAndHashingQuestions, linkedListQuestions, searchingSortingQuestions, segmentTreesQuestions, stackNQueuesQuestions, triesQuestions} from "../controllers/questionsPath.controllers.js"

const router = express.Router();

router.get("/get-arrays-questions", getArraysQuestions);
router.get("/get-strings-questions", getStringsQuestions);
router.get("/get-2d-arrays-questions", get2darraysquestions);
router.get("/get-searching-and-sorting-questions", searchingSortingQuestions);
router.get("/get-backtracking-questions", backtrackingQuestions);
router.get("/get-linked-list-questions", linkedListQuestions);
router.get("/get-stack-and-queues-questions", stackNQueuesQuestions);
router.get("/get-greedy-questions", greedyQuestions);

// updated
router.get("/get-binary-trees-questions", binaryTreesQuestions);
router.get("/get-binary-search-trees-questions", binarySearchTreeQuestions);
router.get("/get-heaps-and-hashing-questions", heapsAndHashingQuestions);
router.get("/get-graphs-questions", graphQuestions);
router.get("/get-tries-questions", triesQuestions);
router.get("/get-dp-questions", dpQuestions);
router.get("/get-bit-manipulation-questions", bitManipulationQuestions);
router.get("/get-segment-trees-questions", segmentTreesQuestions);

export default router;