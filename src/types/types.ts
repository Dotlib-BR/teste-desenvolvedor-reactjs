export interface IBook {
	id: number
	title: string
	editor: string
	year: number
	image: string
}

export interface ICategory {
	id: number
	title: string
}

export interface IMenu {
	id: number
	title: 'HOME' | 'PESQUISA AVANÇADA' | 'BASES' | 'LOGIN'
}
