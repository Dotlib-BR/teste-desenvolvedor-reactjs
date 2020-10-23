import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'


//Styles
import './styles.css';

//Assets
import logo from '../../assets/images/logo_dotlib.png'

//API
import api from '../../services/api';

interface menuItensProps {
    title: string
    id: number
}

const Header: React.FC = () => {
    const [menuItens, setMenuItems] = useState<menuItensProps[]>([]);
    const [inputValue, setInputValue] = useState('');


    useEffect(() => {
        api.get('/menu').then(response => {
            setMenuItems(response.data);
        })
    }, [])


    return (
        <nav id="header-component">
            <li><Link to="/"><img src={logo} alt='dot.lib' /></Link></li>
            <ul>

                {menuItens.map(menuItem => (
                    <li key={menuItem.id}><Link to="/">{menuItem.title}</Link></li>
                ))}
            </ul>
            <form className="search-input">
                <input
                    type="text"
                    placeholder='Pesquise um livro'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit"><FaSearch color='white' size='13' /></button>
            </form>

            <button className="menu-button">
                <FiMenu size='35' />
            </button>


        </nav>
    );
}

export default Header;
