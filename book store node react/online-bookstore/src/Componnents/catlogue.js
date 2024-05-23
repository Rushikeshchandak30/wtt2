import React, { useEffect, useState } from 'react';
import { fetchBooks, addBook, updateBook, deleteBook } from '../api/books';
import BookItem from './BookItem';

const Catalogue = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '', description: '', publishedDate: '', isbn: '', coverImageUrl: '' });

  useEffect(() => {
    const getBooks = async () => {
      const booksData = await fetchBooks();
      setBooks(booksData);
    };

    getBooks();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleAddBook = async (e) => {
    e.preventDefault();
    try {
      const addedBook = await addBook(newBook);
      setBooks([...books, addedBook]);
      setNewBook({ title: '', author: '', description: '', publishedDate: '', isbn: '', coverImageUrl: '' });
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      await deleteBook(id);
      setBooks(books.filter(book => book._id !== id));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div>
      <h2>Catalogue</h2>
      <form onSubmit={handleAddBook}>
        <input type="text" name="title" value={newBook.title} onChange={handleInputChange} placeholder="Title" required />
        <input type="text" name="author" value={newBook.author} onChange={handleInputChange} placeholder="Author" required />
        <input type="text" name="description" value={newBook.description} onChange={handleInputChange} placeholder="Description" required />
        <input type="date" name="publishedDate" value={newBook.publishedDate} onChange={handleInputChange} required />
        <input type="text" name="isbn" value={newBook.isbn} onChange={handleInputChange} placeholder="ISBN" required />
        <input type="text" name="coverImageUrl" value={newBook.coverImageUrl} onChange={handleInputChange} placeholder="Cover Image URL" />
        <button type="submit">Add Book</button>
      </form>
      <ul>
        {books.map(book => (
          <BookItem key={book._id} book={book} onDelete={handleDeleteBook} />
        ))}
      </ul>
    </div>
  );
};

export default Catalogue;
