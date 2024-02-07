import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get('http://localhost:3000/menu');
        setMenuItems(response.data);
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };

    fetchMenuItems();
  }, []);

  return (
      <ul>
        {menuItems.map(item => (
          <li key={item.id}><a href='/' className='lnkMenu' title='{item.title}'>{item.title}</a></li>
        ))}
      </ul>
  );
};

export default Menu;
