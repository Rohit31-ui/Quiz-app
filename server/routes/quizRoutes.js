import express from "express";
import quizController from "../controllers/quizController.js";

const router = express.Router();

// Create a quiz
router.post("/quizzes", quizController.createQuiz);

// Add a question to a quiz
router.post("/quizzes/:quizId/questions", quizController.addQuestion);

// Get all quizzes
router.get("/quizzes", quizController.getAllQuizzes);

// Get all questions of a quiz
router.get("/quizzes/:quizId/questions", quizController.getQuizQuestions);


export default router;
