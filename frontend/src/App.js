import React, { useEffect, useState } from "react";
import { handleAddOrEdit, handleEdit, handleDelete } from "./react_interface/crud_api";
import { fetchAllAuthors, fetchAllBooks } from "./react_interface/fetching_data";
import BookForm from "./react_interface/BookForm";
import BookList from "./react_interface/BookList";

const App = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [error, setError] = useState(null);
  const [currentBook, setCurrentBook] = useState({ title: "", author: "" });
  const [isEditing, setIsEditing] = useState(false);

  const loadBooks = async () => {
    try {
      const allBooks = await fetchAllBooks();
      setBooks(allBooks);
    } catch (err) {
      setError(err.message);
    }
  };

  const loadAuthors = async () => {
    try {
      const allAuthors = await fetchAllAuthors();
      setAuthors(allAuthors);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    loadBooks();
    loadAuthors();
  }, []);

  return (
    <div className="app">
      <h1>Book Management</h1>
      <BookForm
        currentBook={currentBook}
        setCurrentBook={setCurrentBook}
        authors={authors}
        handleAddOrEdit={(bookData) =>
          handleAddOrEdit(bookData, isEditing, currentBook, setBooks, setCurrentBook, setIsEditing, loadBooks)
        }
        isEditing={isEditing}
      />
      <BookList
        books={books}
        handleEdit={(book) => handleEdit(book, setCurrentBook, setIsEditing)}
        handleDelete={(id) => handleDelete(id, books, setBooks)}
        setCurrentBook={setCurrentBook}
        setIsEditing={setIsEditing}
      />
    </div>
  );
};

export default App;