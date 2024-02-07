import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Sidebar = ({ handleCategoryChange }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:3000/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleCheckboxChange = (category) => {
    // Ativa a categoria selecionada
    handleCategoryChange(category);
    
    // Desativa todas as outras categorias
    const updatedCategories = categories.map(cat => ({
      ...cat,
      checked: cat.id === category.id
    }));
    setCategories(updatedCategories);
  };

  return (
    <div className="sidebar">
      <h2>ASSUNTO</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <input
              type="checkbox"
              id={category.id}
              value={category.title}
              checked={category.checked || false}
              onChange={() => handleCheckboxChange(category)}
            />
            <label htmlFor={category.id}>{category.title}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
