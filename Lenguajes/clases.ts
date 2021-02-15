
class Persona {
    /* public nombre: string;
    private edad: number
    constructor(nombre: string, edad: number) {
        this.nombre = nombre
        this.edad = edad
    } */

    constructor(
        public nombre: string, 
        private edad: number) {
    }
    saludar() {
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad}`)
    }
}

const p1 = new Persona('Pepe', 23)
console.log(p1)
p1.nombre = 'Jose'
p1.saludar()

// p1.altura = 180 en TS no es posible
console.log(p1)

class Alumno extends Persona {
    curso: string
    constructor(nombre, edad, curso = 'Angular') {
        super(nombre, edad)
        this.curso = curso
    }
    saludar() {
        super.saludar()
        console.log(`Estoy estudiando ${this.curso}`)
    }
}

const a1 = new Alumno('Elena', 27, 'Vue')
a1.saludar()