import styles from './Search.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Search() {
    return (
        <form className={styles.search}>
            <input
                type='search'
                className={styles.input}
            />
            <button
                title='Buscar'
                type="submit"
            >
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </form>
    )
}