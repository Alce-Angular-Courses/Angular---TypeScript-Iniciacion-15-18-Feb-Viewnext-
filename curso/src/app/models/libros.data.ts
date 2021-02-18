import { Libro } from "./libro";

export const LIBROS: Array<Libro> = [
    new Libro('01','Angular',['Pepe Perez']),
    {id : '02', titulo: 'Angular avanzado', autores: ['Ernesto Lopez'] },
    new Libro(3,'Angular para torpes',['Elena Martinez']),
]