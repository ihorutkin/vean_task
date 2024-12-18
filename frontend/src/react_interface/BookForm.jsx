import React from "react";

const BookForm = ({ currentBook, setCurrentBook, authors, handleAddOrEdit, isEditing }) => {
  return (
    <form onSubmit={(e) => { e.preventDefault(); handleAddOrEdit({ title: currentBook.title, author: currentBook.author }); }}>
      <input
        type="text"
        placeholder="Book Title"
        value={currentBook.title}
        onChange={(e) => setCurrentBook({ ...currentBook, title: e.target.value })}
        required
      />
      <select
        value={currentBook.author}
        onChange={(e) => setCurrentBook({ ...currentBook, author: e.target.value })}
        required
      >
        <option value="">Select Author</option>
        {authors.map((author) => (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        ))}
      </select>
      <button type="submit">{isEditing ? "Update" : "Add"} Book</button>
    </form>
  );
};

export default BookForm;
