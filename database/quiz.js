const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    startTime: {
        type: Date,
        required: true,
        default: Date.now,
      },
      endTime: {
        type: Date,
      },
      answeredQuestions: [
        {
          question: {
            type: String,
            required: true,
          },
          answer: {
            type: String,
            required: true,
          },
          isCorrect: {
            type: Boolean,
            required: true,
          },
        },
      ],
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;