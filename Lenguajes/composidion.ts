class Mascota {
    constructor(public nombre: string) {}
}

class Persona {
    constructor(public mascota: Mascota) {}
}


const p1 = new Persona(new Mascota('Pepe'))