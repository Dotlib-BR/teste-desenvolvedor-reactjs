import styles from './Header.module.scss'
import logo from '../../../public/images/logo_dotlib.png'
import { useContext } from 'react'
import { DataContext } from '../../contexts/DataContext.tsx'
import { IMenu } from '../../types/types.ts'
import Search from '../Search/Search.tsx'

export default function Header() {
    const {menu} = useContext(DataContext)

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <img src={logo} alt='logo dotlib' />

                <nav>
                    <ul>
                        {menu &&
                            menu.map((item: IMenu) => (
                                <li>{item.title}</li>
                            ))
                        }
                    </ul>
                </nav>

                <Search />
            </div>
        </header>
    )
}
