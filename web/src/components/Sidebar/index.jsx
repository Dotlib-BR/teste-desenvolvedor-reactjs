import { useEffect, useState } from 'react';
import api from '../../utils/api'

import * as S from './styles';

export function SideBar() {
    const [category, setCategory] = useState([]);


    useEffect(() => {
        api.get('/categories').then((category) => {
            setCategory(category.data)
        })
    },[])

    return (
        <S.Container>
            <h1>Assunto</h1>
                {category.map((category) => (
                    <S.CheckBoxContainer key={category.id}>
                        <input type="checkbox"  />
                        <label >{category.title}</label>
                    </S.CheckBoxContainer>
                ))}
        </S.Container>
    )
}