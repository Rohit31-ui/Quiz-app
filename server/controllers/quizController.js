import Quiz from "../models/Quiz.js";
import Question from "../models/Question.js";
import Option from "../models/Option.js";

// Create Quiz
const createQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.create({ title: req.body.title });
    res.status(201).json(quiz);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Add Question + Options
const addQuestion = async (req, res) => {
  try {
    const { text, type, options } = req.body;

    //validation
    if (type === "text" && text.length > 300) {
      return res.status(400).json({ error: "Text question exceeds 300 chars" });
    } 


    if (type !== "text") {
      if (!options || options.length < 2) {
        return res.status(400).json({ error: "At least 2 options are required" });
      }

      const correctCount = options.filter(opt => opt.isCorrect).length;
      
      if (type === "single" && correctCount !== 1) {
        return res.status(400).json({ error: "Single choice must have exactly 1 correct option" });
      }

      if (type === "multiple" && correctCount < 1) {
        return res.status(400).json({ error: "Multiple choice must have at least 1 correct option" });
      }
    }

    //save to database
    const question = await Question.create({
      quizId: req.params.quizId,
      text,
      type,
    });


    let savedOptions = [];
    if (type !== "text") {
      savedOptions = await Promise.all(
        options.map(opt =>
          Option.create({
            questionId: question._id,
            text: opt.text,
            isCorrect: opt.isCorrect,
          })
        )
      );
    }

    res.status(201).json({ question, options: savedOptions });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All Quizzes
const getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//  Get Questions for a Specific Quiz
const getQuizQuestions = async (req, res) => {
  try {
    const questions = await Question.find({ quizId: req.params.quizId }).lean();
    const questionsWithOptions = await Promise.all(
      questions.map(async (q) => {
        const options = await Option.find({ questionId: q._id }).lean();
        return { ...q, options };
      })
    );
    res.json({ quizId: req.params.quizId, questions: questionsWithOptions });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default {
  createQuiz,
  addQuestion,
  getAllQuizzes,
  getQuizQuestions,
};
