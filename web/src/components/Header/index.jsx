import { useEffect, useState } from 'react'
import api from '../../utils/api'

import * as S from './styles'

import logoImg from '../../ images/logo_dotlib.png'

export function Header() {
    const [menuItem, setMenuItem] = useState("");

    useEffect(() => {
        api.get('/menu').then((response) => {

            setMenuItem(response.data)
        })
    },[])


    return (
        <S.Header>
            <S.Container>
                <img src={logoImg} alt="logo dot lib" />
                
                <S.Nav>
                    <ul>
                        {menuItem.map((link) => (
                            <li key={link.id}><a href="#">{link.title}</a></li>
                        ))}
                    </ul>
                </S.Nav>
            </S.Container>
        </S.Header>
    )
}