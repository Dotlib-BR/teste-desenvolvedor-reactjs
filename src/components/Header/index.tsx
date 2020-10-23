import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'



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
    const [sidebar, setSidebar] = useState(false);

    const showSideBar = () => setSidebar(!sidebar);

    useEffect(() => {
        api.get('/menu').then(response => {
            setMenuItems(response.data);
        })
    }, [])


    return (
        <nav id="header-component">
            <li><Link to="/"><img src={logo} alt='dot.lib' /></Link></li>
            
            <ul className='menu-component'>
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

            <button className="menu-button" onClick={showSideBar}>
                <FiMenu size='35' color='#242424'/>
            </button>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSideBar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <AiOutlineClose color='#FFF' size={20}/>
                        </Link>
                    </li>
                    {menuItens.map(menuItem => {
                        return (
                            <li key={menuItem.id}><Link to="/" className='nav-title'>{menuItem.title}</Link></li>
                        );
                    })}
                </ul>
            </nav>


        </nav>
    );
}

export default Header;
