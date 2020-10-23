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
    const  [widthDimension, setWidthDimension] = useState<any>();

    useEffect(() => {
        api.get('/books').then(response => {
            setBooks(response.data);
        })
    }, [])

    useEffect(() =>{
        window.addEventListener('resize', () => {
            setWidthDimension(window.innerWidth)
        })
    }, [widthDimension])

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
                            <div className='responsive-div' id={`${book.id}`} key={book.id}>
                                <div className="book-item">
                                    <img src={book.image} alt={book.title} />
                                    <CheckboxItem id={`${book.id}`} title={`${book.id}.`} />

                                    <div className="title">
                                        <h3>{book.title}</h3>
                                    </div>

                                    <h4><strong>{book.editor}</strong><br />{book.year}</h4>
                                </div>
                                <hr className={book.id % 2 === 0 ? 'transparent' : 'responsive-hr'}/>
                                <hr className={widthDimension > 630 ? 'transparent' : 'responsive-hr dif'}/>                              
                            </div>
                        ))}

                        <hr className='section-hr' id='section-hr'/>
                    </div>

                </div>
            </main>
            <Footer />

        </div>
    );
}

export default Home;