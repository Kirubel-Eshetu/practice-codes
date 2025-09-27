import mongoose from "mongoose";

const quizSchema = new mongoose.Schema ({
    title: {type:String, required: true},
    questions: [{
        question: String,
        options: [String],
        correctAnswer: Number
    }]
});

const Quiz = mongoose.model('Quiz', quizSchema);
export default Quiz; 