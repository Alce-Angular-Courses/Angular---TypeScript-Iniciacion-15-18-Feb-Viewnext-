interface iTarea {
    nombre: string,
    responsable: string, 
    isCompleted: boolean
}

export class Tarea implements iTarea { 
    constructor(
        public nombre: string = '',
        public responsable: string = 'Alejandro', 
        public isCompleted: boolean = false
        ) {} 
}



