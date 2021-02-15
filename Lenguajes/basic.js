const aDatos = ['Pepe', 'Juan']
let n = 2
n *= 2

function suma(a = 0, b = 0) {
    return a + b
}
// console.log(suma())

export function multiSuma(...aDatos ) {
    let suma = 0
    /* aDatos.forEach(function (item) {
        suma += item
    }); */

    aDatos.forEach( item => suma += item );
    return suma
}
/* const aNumbers = [12, 45, 23, 12, 78]
console.log(`
    El resultado de la suma de ${aNumbers} es ${multiSuma(...aNumbers)}`)
     */
    // 'El resultado de la suma de ... es ...')
    

