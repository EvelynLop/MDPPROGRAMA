/*const frutas = ['manzana', 'banana', 'ciruela', 'sandía']

console.log(frutas)

const indiceDeBanana = frutas.indexOf('banana')

console.log(frutas[indiceDeBanana])

const indiceABorrar = frutas.indexOf('ciruela')
console.log(frutas)

let eliminado = frutas.splice(indiceABorrar, 3)

console.log(frutas, eliminado)*/

//==============================================================================

// //los ARRAY son una estrucutra de datos
// //que nos ayuda a formar listas (vectores)
// //operar sobre ellos, modificarlos y recorrerlos
// const frutas = ['manzana', 'banana', 'ciruela', 'sandía']
// // con la propiedad length miramos el LARGO (o sea, la cantidad de items) en un array
// //console.log(frutas, 'su largo es ' + frutas.length)
// // cada item tiene un ÍNDICE, y siempre empezamos a contar desde el 0
// //console.log(frutas[0])
// // el método shift extrae el primer item de un array y lo guarda en una variable (es opcional guardalo)
 //const first = frutas.shift()

 //console.log(frutas, 'first is: ' + first)

// ///el método pop extrae el último item de un array, modificando el original y dando la opción de guardarlo en una variable

// const last = frutas.pop()

// //console.log(frutas, 'last is: ' + last)

// ///con el método push del prototipo Array agregamos u valor nuevo al final de la lista
// const otraFruta = 'melón'
// frutas.push(otraFruta)
// frutas.push('banana')
// //console.log(frutas)

// //el método unshift añade un elemento al inicio del array
// const nuevoPrimer = 'palta'
// frutas.unshift(nuevoPrimer)

// //console.log(frutas)

// //el método indexOf nos devuelve el índice del primer elemento coincidente del array
// const indiceDeBanana = frutas.indexOf('banana')

// console.log(indiceDeBanana)

// console.log(frutas[indiceDeBanana])

// //el método splice extrae una porción de un arreglo y toma dos parámetros, el primero representa el indice de inicio del recorte, y el segundo la extensión del mismo

//const indiceABorrar = frutas.indexOf    ('ciruela')
//console.log(frutas)

// let eliminado = frutas.splice(indiceABorrar, 3)

// console.log(frutas, eliminado)

/*const movies=[];

for(let i=0; movies.length < 4; i++){
    const newMovie = prompt('recomendame una pelicula')
    movies.push(newMovie)
    alert(`Hasta ahora me recoemndaste ${movies.length} pelis`)
}

do{
    const movieToRemove = prompt(`Entre ${movies} tengo que eliminar una, cual elimino?`)
    const indexToRemove = movies.indexOf(movieToRemove)

    if(indexToRemove === -1){
        alert(`No se de que pelicula me hablas`)
    }else{
        movies.splice(indexToRemove,1)
        alert(`Gracias! ahora me quede con ${movies}`)
    }
}while (movies.length !== 3)

const libros=[];*/

class Persona{
    constructor(){
        this.nombre = height;
        this.profesion = width;
    }
    sayHi(){
        console.log(this.nombre)
    }
}

const personaConstruida = new Persona('raul','albanil')

console.log(personaConstruida.nombre)

const personaUno={
    nombre : 'raul',
    edad : '35',
    celular:,  
}

const personaDos={
    nombre : 'Maria',
    edad : '25',
    celular:'',
   
}

const personaTres={
    nombre : 'Lucas',
    edad : '40',
    celular:'',
   
}


