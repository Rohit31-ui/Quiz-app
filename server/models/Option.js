import mongoose from "mongoose";

const optionSchema = new mongoose.Schema({
    quiestionId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Question",
        required:true
    },
    text:{
        type:String,
        required:true
    },
    isCorrect:{
        type:Boolean,
        default:false
    }
});

export default mongoose.model("Option", optionSchema);