const API_BASE = 'http://localhost:8000/api';

export const handleAddOrEdit = async (bookData, isEditing, currentBook, setBooks, setCurrentBook, setIsEditing, loadBooks) => {
  try {
    const method = isEditing ? "PUT" : "POST";
    const url = isEditing ? `${API_BASE}/books/${currentBook.id}/` : `${API_BASE}/books/`;
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookData),
    });

    if (!response.ok) throw new Error("Error saving book");
    loadBooks();
    setCurrentBook({ title: "", author: "" });
    setIsEditing(false);
  } catch (error) {
    alert(error.message);
  }
};

export const handleEdit = (book, setCurrentBook, setIsEditing) => {
  setCurrentBook({ id: book.id, title: book.title, author: book.author_id });
  setIsEditing(true);
};

export const handleDelete = async (id, books, setBooks) => {
  try {
    const response = await fetch(`${API_BASE}/books/${id}/`, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error("Error deleting book");
    setBooks(books.filter((book) => book.id !== id));
  } catch (error) {
    alert(error.message);
  }
};