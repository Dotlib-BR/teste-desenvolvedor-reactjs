import { useState, useEffect } from 'react'
import api from '../../services/api'
import './style.css'

function Home() {
  const [categories, setCategories] = useState([])
  const [books, setBooks] = useState([])
  const [booksEnd, setBooksEnd] = useState([])

  useEffect(() => {

    async function loadApi() {

        const res = await api.get('categories')
        setCategories(res.data)

        await api.get('books', {
            headers: {
                "Content-Type": "application/json"
            },
            responseType: 'json'
        })
         .then(res => res.data)
         .then(data => {
            setBooks(data.slice(0,5))

         })
         .catch(err => console.log(err.status))

         await api.get('books', {
            headers: {
                "Content-Type": "application/json"
            },
            responseType: 'json'
        })
         .then(res => res.data)
         .then(data => {
            setBooksEnd(data.slice(5,10))

         })
         .catch(err => console.log(err.status))
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
             <div className="col-sm-12 col-md-8 media">
                    <h2>Livros</h2>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12 landing'>
                                {books.map(book => {
                                    return(
                                        <div className='mt-2 text-center' key={book.id}>                               
                                            <img className='img-fluid books d-block mx-auto mb-2' src={book.image} alt={book.title} />
                                            <input type='checkbox'/>
                                            <p><span>{book.id}</span></p>
                                            <p>
                                                {book.title.substr(0, 11)}<br />
                                                {book.title.substr(12, 18)}<br />
                                            </p>
                                            <p>{book.editor}</p>
                                            <p>{book.year}</p>   
                                        </div>
                                    )
                                })} 
                            </div>
                            <div className='col-md-12 landing mt-2'>
                            {booksEnd.map(book => {
                                    return(
                                        <div className='mt-2 text-center' key={book.id}>                               
                                            <img className='img-fluid books d-block mx-auto mb-2' src={book.image} alt={book.title} />
                                            <input type='checkbox'/>
                                            <p><span>{book.id}</span></p>
                                            <p>
                                                {book.title.substr(0, 11)}<br />
                                                {book.title.substr(12, 18)}<br />
                                            </p>
                                            <p>{book.editor}</p>
                                            <p>{book.year}</p>   
                                        </div>
                                    )
                                })} 
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
    </section>
  );
}

export default Home;
