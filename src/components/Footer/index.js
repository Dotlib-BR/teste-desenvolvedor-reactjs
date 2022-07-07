import logo_footer from '../../assets/logo_footer.png';
import './styles.css';

function Footer(){
  return (
    <div className="footer">
      <div className="small">
        <small>© 2016 Dot.Lib | Todos os direitos reservados | Todos los direchos reservados | All rights reserved</small>
      </div>
      <img className='image_footer' src={logo_footer} alt="logo dot lib" />
    </div>
  )
}

export default Footer;