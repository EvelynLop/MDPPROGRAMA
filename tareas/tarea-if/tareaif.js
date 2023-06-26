/*
Desarrollá un programa
que solicite al usuario
su nombre y su edad.
  Una vez ingresada la edad,
el programa debe mostrar en un mensaje
  - Saludo al usuario
  - Edad actual
  - Año de nacimiento


let nombre=prompt('Cual es tu nombre?')
let edad=prompt('cual es tu edad?')
let añoActual=2023

let resultado=alert(`Hola ${nombre}, tienes ${edad} años y tu fecha de naciemineto es ${parseInt(añoActual) - (edad)}`)*/

/*let nombre = prompt("Ingrese su nombre")
let edad = prompt("Ingrese su edad")
let edadParseada = parseInt(edad)
let añoActual = 2023

if( typeof edadParseada === 'NaN' ){
    alert("ingrese el año correctamente")
}else{
    let añoNacimiento = añoActual - edadParseada
    alert("Tu año de nacimiento es " + añoNacimiento)
}*/ 

/*
Desarrollá un programa verdulero
que reciba una de las siguientes frutas,
y devuelva su precio
    Manzanas - $375.00 por kilo
    Plátanos - $125.00 por kilo
    Zanahorias - $187.50 por kilo
    Naranjas - $200.00 por kilo
    Espinacas - $300.00 por kilo
    Uvas - $500.00 por kilo
    Tomates - $250.00 por kilo
    Pepinos - $150.00 por kilo
    Lechuga - $375.00 por kilo
    Fresas - $625.00 por kilo
    Brócoli - $450.00 por kilo
    Piñas - $625.00 por kilo
    Pimientos - $300.00 por kilo
    Sandías - $1,000.00 por kilo
    Calabacines - $225.00 por kilo
*/

/*let frutas=prompt('elige una fruta')

switch(frutas.toLowerCase()){
    case 'manzanas':
        alert('$375.00 por kilo')
        break;
    case 'banana':
        alert('$125.00 por kilo')
        break;
    case 'zanahorias':
        alert('$187.50 por kilo')
        break;
    case 'espinacas':
        alert('$300.00 por kilo')
        break;
    case 'uvas':
        alert('$500.00 por kilo')
        break;
    case 'tomates':
        alert('$250.00 por kilo')
        break;
    default:
        alert('fruta incorrecta')
        break;
}*/


const frutas = prompt('Elige una fruta')
let precio=frutas

switch(frutas.toLowerCase()){
    case 'manzana':
        precio = '$350 el Kg'
        break;
    case 'pera':
        precio =  '$350 el Kg'
        break;
    case 'banana':
        precio = '$350 el Kg'
        break;
    case 'kiwi':
        precio = '$350 el Kg'
        break;
    case 'Limon':
        precio = '$350 el Kg'
        break;
    case 'sandia':
        precio = '$350 el Kg'
        break;
    case 'anana':
        precio = '$350 el Kg'
        break;
    case 'naranja':
    precio = '$350 el Kg'
        break;
    case 'mandarina':
        precio = '$350 el Kg'
        break;
    default:
        alert ('La fruta no esta disponible')
    break;
}




