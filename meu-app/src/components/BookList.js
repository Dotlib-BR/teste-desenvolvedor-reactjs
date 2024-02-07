import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookList = ({ categories, selectedCategory }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  const filteredBooks = selectedCategory
    ? books.filter(book => book.categoryId === selectedCategory.id)
    : books;

  return (
    <div className="book-list">
      {filteredBooks.length === 0 ? (
        <p>Sem nenhuma categoria</p>
      ) : (
        <>
          <p>Mostrando {filteredBooks.length} de {books.length}</p>
          <ul>
            {filteredBooks.map(book => (
              <li key={book.id}>
                <img src={book.image} alt={book.title} />
                <div>
                  <h3>{book.title}</h3>
                  <p>Editor: {book.editor}</p>
                  <p>Ano: {book.year}</p>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default BookList;
