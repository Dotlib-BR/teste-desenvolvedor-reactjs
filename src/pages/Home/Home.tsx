import styles from './Home.module.scss'
import { useContext, useState, useEffect } from 'react'
import { DataContext } from '../../contexts/DataContext.tsx'
import { IBook } from '../../types/types.ts'

export default function Home() {
    const { books } = useContext(DataContext)

    return (
        <>
            
        </>
    )
}
