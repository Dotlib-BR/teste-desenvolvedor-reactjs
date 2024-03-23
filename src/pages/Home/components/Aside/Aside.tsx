import styles from './Aside.module.css'
import { useContext } from 'react'
import { DataContext } from '../../../../contexts/DataContext.tsx'
import { ICategory } from '../../../../types/types.ts'

export default function Aside() {
    const {categories} = useContext(DataContext)

    return (
        <aside className={styles.categoriesPainel}>
            <h2>assunto</h2>
            <nav className={styles.categoriesList}>
                {categories && 
                    categories.map((category: ICategory) => (
                        <label className={styles.label}>
                            <input type="checkbox" />
                            <span>{category.title}</span>
                        </label>
                    ))
                }
            </nav>
        </aside>
    )
}
