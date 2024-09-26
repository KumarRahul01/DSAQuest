import express from "express";
import {backtrackingQuestions, get2darraysquestions, getArraysQuestions, getStringsQuestions, greedyQuestions, linkedListQuestions, searchingSortingQuestions, stackNQueuesQuestions} from "../controllers/path.controllers.js"

const router = express.Router();

router.get("/get-arrays-questions", getArraysQuestions);
router.get("/get-strings-questions", getStringsQuestions);
router.get("/get-2d-arrays-questions", get2darraysquestions);
router.get("/get-searching-and-sorting-questions", searchingSortingQuestions);
router.get("/get-backtracking-questions", backtrackingQuestions);
router.get("/get-linked-list-questions", linkedListQuestions);
router.get("/get-stack-and-queues-questions", stackNQueuesQuestions);
router.get("/get-greedy-questions", greedyQuestions);

export default router;