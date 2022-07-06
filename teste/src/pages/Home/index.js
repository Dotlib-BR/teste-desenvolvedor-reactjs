import { useState, useEffect } from 'react'
import api from '../../services/api'
import './style.css'

function Home() {
  const [categories, setCategories] = useState([])
  const [books, setBooks] = useState([])

  useEffect(() => {

    async function loadApi() {

        const res = await api.get('categories')
        setCategories(res.data)

        await api.get('books')
         .then(res => {
             setBooks(res.data)

         })
         .catch(err => console.log(err))
        

    }
    loadApi()

  }, [])

  return (
    <section className="container mt-2">
        <div className="row">
            <div className="col-sm-12 col-md-4">
                <h3>Assunto</h3>
                <ul>
                    {categories.map(categorie => {
                        return(
                            <li key={categorie.id}>
                                <input type='checkbox' className='me-2' />
                                <span>{categorie.title}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
             <div className="col-sm-12 col-md-8">
                <h2>Livros</h2>
                <ul>
                    {books.map(book => {
                        return(
                            <li key={book.id}>
                                <img src={`${book.image}`} alt={book.title} />
                                <p>{book.title}</p>
                                <p>{book.editor}</p>
                                <p>{book.year}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    </section>
  );
}

export default Home;
