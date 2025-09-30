# Quiz Application Backend

### **Project Description**
This is a simple backend API for a Quiz Application. It allows you to:
- Create quizzes with a title.
- Add questions to quizzes, including multiple options, and mark correct answers.
- Fetch all quizzes.
- Fetch all questions (with options) for a specific quiz.

The API supports single-choice, multiple-choice, and text-based questions (with a 300-character limit).

---

### **Setup Instructions (Run Locally)**

1. **Clone the repository**
bash:-

### step1:- Clone the repo
git clone <YOUR_REPO_URL>
cd Quiz-Application-Backend/server

### step2:- Install Dependencies
npm install

### step3:- create env file

### step4 :- add this in env
MONGODB_URL=mongodb://localhost:27017/
PORT=3000

### step5 :- start the server
nodemon server.js / npm run dev (script added)


**API Base URL**
http://localhost:3000/api

API Endpoints
Method	Endpoint	Description
POST	/api/quizzes	Create a new quiz
POST	/api/quizzes/:quizId/questions	Add a question (with options) to a quiz
GET	/api/quizzes	Get all quizzes
GET	/api/quizzes/:quizId/questions	Get all questions (with options) for a quiz

Running Test Cases

Currently, you can test the API using tools like Postman or VS Code REST Client:

Create Quiz: POST /api/quizzes with JSON body:

{ "title": "JavaScript Basics" }


Add Question: POST /api/quizzes/:quizId/questions with JSON body:

{
  "text": "What is the output of 1 + '1' in JavaScript?",
  "type": "single",
  "options": [
    { "text": "11", "isCorrect": true },
    { "text": "2", "isCorrect": false }
  ]
}


Get All Quizzes: GET /api/quizzes

Get Quiz Questions: GET /api/quizzes/:quizId/questions

No automated unit tests are included yet. Manual testing via Postman or REST Client is recommended.

Assumptions and Design Choices

Schemas: Three separate schemas (Quiz, Question, Option) to keep data normalized.

Question Types: Supports single, multiple, and text questions.

Option Correctness: Correct answers are stored using the isCorrect field in the Option schema.

Validation:

Single-choice questions must have exactly one correct option.

Multiple-choice questions must have at least one correct option.

Text questions are limited to 300 characters.

Database: MongoDB (local or cloud instance).

Tech Stack

Node.js

Express.js

MongoDB

Mongoose

dotenv


