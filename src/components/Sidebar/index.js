import { useEffect, useState } from 'react';
import api from '../../services/api';

import './styles.css';

function Sibedar(){
  const [categoria, setCategoria] = useState([]);

    useEffect(() => {
        api.get('/categories').then((response) => {
            setCategoria(response.data)
        })
    },[])

    return (
        <div className='sibebar_container'>
            <h1>Assunto</h1>
                {categoria.map((item) => (
                    <div className='check_b' key={item.id}>
                        <input type="checkbox"  />
                        <label >{item.title}</label>
                    </div>
                ))}
        </div>
    )
}

export default Sibedar;