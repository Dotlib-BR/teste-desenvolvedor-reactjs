import React, { useEffect, useState } from 'react';

//Styles
import './styles.css';

//API
import api from '../../services/api';

interface CategoriesProps {
    title: string
    id: number
}

const Filter: React.FC = () => {
    const [categories, setCategories] = useState<CategoriesProps[]>([]);

    useEffect(() => {
        api.get('/categories').then(response => {
            setCategories(response.data);
        })
    }, [])

    return (
        <form action="">
            {categories.map(categorie => (
                <div className="checkbox-item" key={categorie.id}>
                    <input type="checkbox" id={`${categorie.id}`} onClick={() => console.log('cliquei')} />
                    <label htmlFor={`${categorie.id}`}>{categorie.title}</label>
                </div>

            ))}

        </form>
    );
}

export default Filter;