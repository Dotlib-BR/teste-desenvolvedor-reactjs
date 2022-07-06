import logo from '../../assets/images/logo_dotlib.png'
import { useState, useEffect } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './style.css'

function Header() {
  const [home, setHome] = useState([])
  const [search, setSearch] = useState([])
  const [bases, setBases] = useState([])
  const [login, setLogin] = useState([])

  useEffect(() => {

    async function loadApi() {
        const res = await api.get('menu')
        setHome(res.data[0].title)
        setSearch(res.data[1].title)
        setBases(res.data[2].title)
        setLogin(res.data[3].title)
    }
    loadApi()

  }, [])

  return (
    <header>
        <nav className="navbar navbar-expand-lg navbar-light navbar-color bg-light">
        <div className="container">
            <Link className="navbar-brand" to="/"><img src={logo} alt='Logo dot.lib' /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" to="/">{home}</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/">{search}</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/">{bases}</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">{login}</Link>
                </li>
            </ul>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">+</button>
            </form>
            </div>
        </div>
        </nav>
    </header>
  );
}

export default Header;
