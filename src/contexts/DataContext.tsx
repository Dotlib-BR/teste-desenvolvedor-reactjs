import { createContext, useEffect, useState } from 'react'

export const DataContext = createContext(null)
DataContext.displayName = 'Data'

export const DataProvider = ({ children }: { children: JSX.Element }) => {
	const [categories, setCategories] = useState(null)
	const [menu, setMenu] = useState(null)
	const [books, setBooks] = useState(null)
	const endPoint = 'http://localhost:3000'

	async function getData(data: 'categories' | 'menu' | 'books', setState: React.SetStateAction<any>) {
		try {
			const response = await fetch(`${endPoint}/${data}`)
			if (response.ok) {
                const data = await response.json()
				setState(data)
			} else {
				throw new Error(`Erro na requisição de ${data}: ${response.status} ${response.statusText}`)
			}
		} catch (error) {
			console.error(`Erro ao buscar '${data}': ${error}`)
		}
	}

    useEffect(() => {
        getData('books', setBooks)
        getData('categories', setCategories)
        getData('menu', setMenu)
    }, [])

	return (
		<DataContext.Provider
			value={{
				categories,
				setCategories,
				menu,
				setMenu,
				books,
				setBooks,
			}}
		>
			{children}
		</DataContext.Provider>
	)
}
