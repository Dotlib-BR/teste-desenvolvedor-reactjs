import { useEffect, useState } from 'react';
import api from '../../services/api';
import { FaSearch } from 'react-icons/fa';
import './styles.css';

import logo_dot from '../../assets/logo_dotlib.png';

function Header(){
  const [menuItem, setMenuItem] = useState([]);

  useEffect(() => {
    api.get('menu').then((response) => {
        setMenuItem(response.data)
        console.log(menuItem);
    })
},[])

  return (
    <div className='heade'>
        <div className='container'>
            <img className='image' src={logo_dot} alt="logo dot lib" />
            <div className='nav'>
                <ul>
                    {menuItem.map((item) => (
                        <li key={item.id}><a href="#">{item.title}</a></li>
                    ))}
                </ul>
            </div>

              <div className='Input'>
                <div className='pesquisa'>
                    <FaSearch />
                </div>
                <input type="text" />
              </div>
        </div>
      </div>
  )
}

export default Header;