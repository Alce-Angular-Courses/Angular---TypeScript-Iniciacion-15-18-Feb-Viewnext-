export class Alumno {

    constructor(
        public nombre: string = '', 
        public apellidos: string = '', 
        public dni: string = '', 
        public email: string = '', 
        public nacim: string = '', 
        public coment: string = '', 
        public isOk: boolean = false, 
        public turno: Turno | null = null, 
        public curso: Curso | null = null,
    ) {}
}

interface IMaestros { 
    id: string; 
    nombre: string; 
    info: string; 
}

export class Turno implements IMaestros {
    constructor( 
        public id: string = '', 
        public nombre: string = '', 
        public info: string= '' ) {}
}
export class Curso implements IMaestros {
    constructor( 
        public id: string = '', 
        public nombre: string = '', 
        public info: string= '' ) {}
}