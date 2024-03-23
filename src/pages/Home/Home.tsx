import styles from './Home.module.scss'
import { useContext, useState, useEffect } from 'react'
import { DataContext } from '../../contexts/DataContext.tsx'
import { IBook } from '../../types/types.ts'
import Aside from './components/Aside/Aside.tsx'
import Card from './components/Card/Card.tsx'

export default function Home() {
    const { books } = useContext(DataContext)
    const limite = 25

    return (
        <div className={styles.container}>
            <Aside />
            <main>
                <div>Mostrando 1 até {limite} de 10 resultados.</div>
                <div className={styles.cardContainer}>
                    {books &&
                        books.slice(0,5).map((book: IBook) => (
                            <Card key={book.id} book={book} />
                        ))
                    }
                </div>

                <hr />

                <div className={styles.cardContainer}>
                    {books &&
                        books.slice(5,10).map((book: IBook) => (
                            <Card key={book.id} book={book} />
                        ))
                    }
                </div>
            </main>
        </div>
    )
}
