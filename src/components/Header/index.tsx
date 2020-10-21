import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'

//Styles
import './styles.css';

//Assets
import logo from '../../assets/images/logo_dotlib.png'

const Header: React.FC = () => {
    return (
        <nav id="header-component">
            <li><Link to="/"><img src={logo} alt='dot.lib' /></Link></li>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/">PESQUISA AVANÇADA</Link></li>
                <li><Link to="/">BASES</Link></li>
                <li><Link to="/">LOGIN</Link></li>
            </ul>
            <form className="search-input">
                <input type="text" />
                <button type="submit"><FaSearch color='white' size='13'/></button>
            </form>

        </nav>
    );
}

export default Header;
