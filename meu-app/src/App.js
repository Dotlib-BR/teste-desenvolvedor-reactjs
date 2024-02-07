import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from './components/Menu';
import Sidebar from './components/Sidebar';
import BookList from './components/BookList';
import Search from './components/Search';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [books, setBooks] = useState([]);

  const handleCategoryChange = category => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:3000/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchCategories();
    fetchBooks();
  }, []);

// Função para associar os livros às categorias com base no categoryId
const associateBooksToCategories = (books, categories) => {
  return books.map(book => {
    const associatedCategory = categories.find(category => category.id === book.categoryId);

    return {
      ...book,
      category: associatedCategory ? associatedCategory.title : 'Sem categoria'
    };
  });
};



  // Associar os livros às categorias
  const booksWithCategories = associateBooksToCategories(books, categories);

  return (
    <div className="App">
      <header>
        <div className='content'>
          <h1>
            <a href="https://dotlib.com" className="navbar-brand">
              <img id="logo" src="https://dotlib.com/theme/img/logos/logo.png" alt="Logo" />
            </a>
          
          </h1>
          <div className='menu'>
            <Menu />
          </div>
          <div className='search'>
            <Search />
          </div>
        </div>
      </header>
      <div className="content">
        <Sidebar handleCategoryChange={handleCategoryChange} />
        <main>
          <BookList categories={categories} books={booksWithCategories} selectedCategory={selectedCategory} />
        </main>
      </div>
    </div>
  );
}

export default App;
