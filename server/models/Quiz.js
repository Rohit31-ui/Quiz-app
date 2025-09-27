import mongoose from "mongoose";

//quizschema
const quizSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    }
});


export default mongoose.model("Quiz", quizSchema);