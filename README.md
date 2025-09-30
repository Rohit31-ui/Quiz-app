# 🎯 Quiz Application Backend

---

## 📖 Project Description
This is a **simple backend API** for a Quiz Application. It allows you to:

- ✅ Create quizzes with a title  
- ✅ Add questions to quizzes, including multiple options, and mark correct answers  
- ✅ Fetch all quizzes  
- ✅ Fetch all questions (with options) for a specific quiz  

The API supports:  
- **Single-choice questions**  
- **Multiple-choice questions**  
- **Text-based questions** (with a 300-character limit)

---

## 🛠️ Setup Instructions (Run Locally)

### 1️⃣ Clone the repository
```bash
git clone <YOUR_REPO_URL>
cd Quiz-Application-Backend/server
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Create `.env` file
Add the following variables in `.env` file:
```env
MONGODB_URL=mongodb://localhost:27017/quiz
PORT=3000
```

### 4️⃣ Start the server
```bash
# Using nodemon
nodemon server.js

# Or using npm script if added
npm run dev
```

**API Base URL:**  
```
http://localhost:3000/api
```

---

## 🚀 API Endpoints

| Method | Endpoint | Description |
|--------|---------|-------------|
| POST   | /api/quizzes | Create a new quiz |
| POST   | /api/quizzes/:quizId/questions | Add a question (with options) to a quiz |
| GET    | /api/quizzes | Get all quizzes |
| GET    | /api/quizzes/:quizId/questions | Get all questions (with options) for a quiz |

---

## 🧪 Running Test Cases

You can test the API using **Postman** or **VS Code REST Client**.

### 1️⃣ Create Quiz
**POST** `/api/quizzes`  
**Body:**
```json
{
  "title": "JavaScript Basics"
}
```

### 2️⃣ Add Question
**POST** `/api/quizzes/:quizId/questions`  
**Body:**
```json
{
  "text": "What is the output of 1 + '1' in JavaScript?",
  "type": "single",
  "options": [
    { "text": "11", "isCorrect": true },
    { "text": "2", "isCorrect": false }
  ]
}
```

### 3️⃣ Get All Quizzes
**GET** `/api/quizzes`

### 4️⃣ Get Quiz Questions
**GET** `/api/quizzes/:quizId/questions`

> ⚠️ No automated unit tests are included yet. Manual testing via Postman or REST Client is recommended.

---

## 💡 Assumptions and Design Choices

- **Schemas**: Three separate schemas (`Quiz`, `Question`, `Option`) to keep data normalized  
- **Question Types**: Supports `single`, `multiple`, and `text`  
- **Option Correctness**: Correct answers stored using `isCorrect` field in `Option`  
- **Validation**:
  - Single-choice questions must have exactly one correct option  
  - Multiple-choice questions must have at least one correct option  
  - Text questions limited to 300 characters  
- **Database**: MongoDB (local or cloud instance)

---

## 🛠️ Tech Stack

- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- dotenv

---

## 🔮 Future Enhancements

- Implement scoring logic for `submitQuiz` endpoint  
- Add automated unit tests for all API endpoints  
- Add user authentication and quiz attempt tracking  
- Deploy API to cloud (Heroku, Render, or Vercel)

---

## 🔗 GitHub Repository
[rohit lad](<YOUR_REPO_URL>)


## connect with me
