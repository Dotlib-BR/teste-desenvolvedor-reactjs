import React, { useEffect, useState } from 'react';

//Styles
import './styles.css';

//API
import api from '../../services/api';
import CheckboxItem from '../CheckboxItem';

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
                    <CheckboxItem id={`${categorie.id}`} title={categorie.title}/>
                </div>
            ))}

        </form>
    );
}

export default Filter;