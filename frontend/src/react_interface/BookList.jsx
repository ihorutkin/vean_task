import React from "react";

const BookList = ({ books, handleEdit, handleDelete, setCurrentBook, setIsEditing }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book-item">
          <div>
            <h2>{book.title}</h2>
            <p>Author: {book.author_name}</p>
          </div>
          <div>
            <button onClick={() => handleEdit(book, setCurrentBook, setIsEditing)}>Edit</button>
            <button className="delete_btn" onClick={() => handleDelete(book.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
