import React, { useEffect, useState } from 'react';

//Componentes
import Header from '../../components/Header';
import Filter from '../../components/Filter';

//Styles
import './styles.css';
import api from '../../services/api';
import CheckboxItem from '../../components/CheckboxItem';
import Footer from '../../components/Footer';

interface BooksProps {
    id: number
    title: string
    editor: string
    year: number
    image: string
}

const Home: React.FC = () => {

    const [books, setBooks] = useState<BooksProps[]>([]);

    useEffect(() => {
        api.get('/books').then(response => {
            setBooks(response.data);
        })
    }, [])

    return (
        <div id="page-home">
            <Header />

            <main>
                <div className="filter">
                    <h3>ASSUNTO</h3>

                    <Filter />
                </div>


                <div className="content">
                    <p>Mostrando 1 até 25 de 2399 resultados.</p>

                    <div className="lib-content">
                        {books.map(book => (
                            <div className="book-item" key={book.id}>
                                <img src={book.image} alt={book.title} />
                                <CheckboxItem id={`${book.id}`} title={`${book.id}.`}/>
                                
                                <h3>{book.title}</h3>

                                <h4><strong>{book.editor}</strong><br/>{book.year}</h4>
                            </div>
                        ))}

                        <hr/>
                    </div>

                </div>
                <Footer/>
            </main>

            

        </div>
    );
}

export default Home;