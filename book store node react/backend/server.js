const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const Book = require('./models/book');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

app.post('/api/books', async (req, res) => {
  const { title, author, description, publishedDate, isbn, coverImageUrl } = req.body;
  try {
    const newBook = new Book({
      title,
      author,
      description,
      publishedDate,
      isbn,
      coverImageUrl
    });
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

app.put('/api/books/:id', async (req, res) => {
  const { title, author, description, publishedDate, isbn, coverImageUrl } = req.body;
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { title, author, description, publishedDate, isbn, coverImageUrl },
      { new: true }
    );
    res.json(updatedBook);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

app.delete('/api/books/:id', async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: 'Book deleted' });
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));
