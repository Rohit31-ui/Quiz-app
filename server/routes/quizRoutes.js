import express from "express";
import quizController from "../controllers/quizController.js";

const router = express.Router();

// Routes
router.post("/quizzes", quizController.createQuiz);
router.post("/quizzes/:quizId/questions", quizController.addQuestion);

router.get("/quizzes", quizController.getAllQuizzes);
router.get("/quizzes/:quizId/questions", quizController.getAllQuizzes); 
router.post("/quizzes/:quizId/submit", quizController.submitQuiz);

export default router;
