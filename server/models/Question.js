import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    quizId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Quiz",
        required:true
    },
    text:{
        type:String,
        required:true
    },
    type:{
        type:String,
        enum:["single","multiple","text"],
        required:true
    }

});

export default mongoose.model("Question", questionSchema);