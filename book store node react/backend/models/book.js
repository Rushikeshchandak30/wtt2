const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  publishedDate: {
    type: Date,
    required: true
  },
  isbn: {
    type: String,
    required: true,
    unique: true
  },
  coverImageUrl: {
    type: String
  }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
 