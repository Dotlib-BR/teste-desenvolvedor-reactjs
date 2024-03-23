import styles from './Card.module.scss'
import { IBook } from '../../../../types/types.ts'

interface CardProps {
    book:IBook
}

export default function Card({book}:CardProps) {
    return (
        <article className={styles.card}>
            <div className={styles.cover}>
                <img src={book.image} alt="capa do livro" />
            </div>
            <label className={styles.title}>
                <input type="checkbox" />
                <span> {book.id}. </span>
                <span>{book.title}</span>
            </label>

            <div className={styles.editor}>{book.editor}</div>

            <div>{book.year}</div>
        </article>
    )
}
