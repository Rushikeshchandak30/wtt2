const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/results', { useNewUrlParser: true, useUnifiedTopology: true });

const resultSchema = new mongoose.Schema({
    student_name: String,
    subject1: Number,
    subject2: Number,
    subject3: Number,
    subject4: Number,
    subject5: Number,
    subject6: Number,
    percentage: Number,
});

const Result = mongoose.model('Result', resultSchema);

app.post('/results', async (req, res) => {
    const { student_name, subject1, subject2, subject3, subject4, subject5, subject6 } = req.body;
    const totalMarks = subject1 + subject2 + subject3 + subject4 + subject5 + subject6;
    const percentage = (totalMarks / 600) * 100;

    const result = new Result({ student_name, subject1, subject2, subject3, subject4, subject5, subject6, percentage });
    await result.save();

    res.send(result);
});

app.get('/results', async (req, res) => {
    const results = await Result.find();
    res.send(results);
});

app.get('/results/:name', async (req, res) => {
    const name = req.params.name;
    const result = await Result.findOne({ student_name: name });

    if (!result) {
        return res.status(404).send({ error: 'Student not found!' });
    }

    res.send(result);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
