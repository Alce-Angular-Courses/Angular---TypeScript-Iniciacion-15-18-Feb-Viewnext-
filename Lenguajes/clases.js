/* function Persona(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
}

Persona.prototype.saludar = function () {
    console.log(`Hola soy ${this.nombre} y tengo ${this.edad}`)
} */

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }
    saludar() {
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad}`)
    }
}

p1 = new Persona('Pepe', 23)
console.log(p1)
p1.saludar()
p1.altura = 180
console.log(p1)

class Alumno extends Persona {
    constructor(nombre, edad, curso = 'Angular') {
        super(nombre, edad)
        this.curso = curso
    }
    saludar() {
        super.saludar()
        console.log(`Estoy estudiando ${this.curso}`)
    }
}

a1 = new Alumno('Elena', 27, 'Vue')
a1.saludar()