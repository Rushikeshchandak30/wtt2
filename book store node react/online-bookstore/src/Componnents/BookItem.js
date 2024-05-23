import React from 'react';

const BookItem = ({ book, onDelete }) => {
  return (
    <li>
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Published Date:</strong> {new Date(book.publishedDate).toLocaleDateString()}</p>
      <p><strong>ISBN:</strong> {book.isbn}</p>
      {book.coverImageUrl && <img src={book.coverImageUrl} alt={book.title} style={{ width: '100px' }} />}
      <button onClick={() => onDelete(book._id)}>Delete</button>
      {/* Add update functionality as needed */}
    </li>
  );
};

export default BookItem;
