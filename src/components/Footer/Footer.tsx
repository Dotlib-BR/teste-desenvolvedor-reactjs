import styles from './Footer.module.scss'
import logo from '../../../public/images/logo_footer.png'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
                <p>@ 2016 Dot.Lib | Todos os direitos reservados | Todos los derechos reservados | All rights reserved</p>
                <img src={logo} alt='Logo dotLib' />
			</div>
		</footer>
	)
}
