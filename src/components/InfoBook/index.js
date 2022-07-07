import { useEffect, useState } from 'react';
import api from '../../services/api';

import './styles.css';

function InfoBook(){
  const [books, setBooks] = useState([]);

    useEffect(() => {
        api.get('/books').then((response) => {
          setBooks(response.data)
        })
    },[])

    return (
        <div className='book_container'>
                {books.map((item) => (
                    <div className='info' key={item.id}>
                        <div className='test'>
                          <img src={item.image} className="book_img" />
                        </div>
                        <div className='check'>
                          <input type="checkbox" />
                          <label >{item.id}</label>
                        </div>
                        <div className='info_title'>
                          <h4>{item.title}</h4>
                        </div>
                        <div className='info_edit'>
                          <h3 >{item.editor}</h3>
                        </div>
                        <div className='info_ano'>
                          <label >{item.year}</label>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default InfoBook;