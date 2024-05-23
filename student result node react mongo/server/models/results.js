const mongoose = require('mongoose');

const ResultSchema = new mongoose.Schema({
    student_name: {
        type: String,
        required: true
    },
    subject1: {
        type: Number,
        required: true
    },
    subject2: {
        type: Number,
        required: true
    },
    subject3: {
        type: Number,
        required: true
    },
    subject4: {
        type: Number,
        required: true
    },
    subject5: {
        type: Number,
        required: true
    },
    subject6: {
        type: Number,
        required: true
    },
    percentage: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Result', ResultSchema);
