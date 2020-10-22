import React from 'react';

//Styles
import './styles.css';

//Assets
import footerLogo from '../../assets/images/logo_footer.png';

const Footer: React.FC = () => {
  return (
    <div id='footer-component'>
      <p>
        © 2016 Dot.Lib | Todos os direitos reservados 
        | Todos los derechos reservados | All rights reserved
      </p>

      <img src={footerLogo} alt="dotLib"/>

    </div>
  );
}

export default Footer;