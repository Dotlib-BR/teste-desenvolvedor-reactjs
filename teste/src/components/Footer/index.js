import logo from '../../assets/images/logo_footer.png'
import { Link } from "react-router-dom";
import './style.css'

function Footer() {
  return (
    <footer className="bg-secondary py-4 d-flex text-center">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-6">
                   <p className="text-white font-size">&copy; 2022 Dot.lib Todos os direitos reservados | Todos los derechos reservados | All rights reserved</p>
                </div>
            
                <div className="col-sm-12 col-md-6">
                    <Link to='/'>
                        <img src={logo} className="img-fluid" alt='Logo marca rodape' />
                    </Link>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
