// Crea una lista vacía llamada "listaGenerica".
// let listaGenerica = [];

// Crea una lista de lenguajes de programación llamada "lenguajesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
// let lenguajesDeProgramacion =['JavaScript', 'C', 'C++', 'Kotlin', 'Python']

// Agrega a la lista "lenguajesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
// lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang')

// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
// console.log(lenguajesDeProgramacion);

// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
// let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python']
// lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang')
// for (let i = lenguajesDeProgramacion.length - 1; i >= 0; i--) {
//     console.log(lenguajesDeProgramacion[i]);
// }

// Crea una función que calcule el promedio de los elementos en una lista de números.
// let listaDeNumeros = [5, 10, 15];
// let cantidadDeNumeros = listaDeNumeros.length;

// function promedio() {
//     let suma = 0;
//     for (let i = 0; i < cantidadDeNumeros; i++) {
//         suma += listaDeNumeros[i];
//     }
//     return suma / cantidadDeNumeros;
// }
// console.log(promedio());

// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
// let listaDeNumeros = [15, 672, 4, 6, 8, 10]
// let numeroMayor = Math.max(...listaDeNumeros);
// let numeroMenor = Math.min(...listaDeNumeros);
// console.log(numeroMayor);
// console.log(numeroMenor);

// Crea una función que devuelva la suma de todos los elementos en una lista.
// let listaDeNumeros = [15, 672, 4, 6, 8, 10];
// let cantidadDeNumeros = listaDeNumeros.length;
// function sumatoria() {
//     let suma = 0;
//     for (let i = 0; i < cantidadDeNumeros; i++) {
//     suma += listaDeNumeros[i];
//     }
//     return suma
// }
// console.log(sumatoria());

// Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o - 1 si no existe en la lista.
let lista = [2, 4, 6, 8]

function indice(numero) {
    return lista.indexOf(numero);
}
console.log (indice(7));

// Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
// let listaA = [15, 62, 4, 6, 10];
// let listaB = [5, 10, 15, 20, 2];

// function sumarListas(listaA, listaB) {
//     // Verificamos que ambas listas tengan el mismo tamaño
//     if (listaA.length !== listaB.length) {
//         alert("Las listas deben tener el mismo tamaño");
//     }
//     let listaSuma = [];

//     for (let i = 0; i < listaA.length; i++) {
//         listaSuma.push(listaA[i] + listaB[i])
//     }
//     return listaSuma;
// }
// console.log(sumarListas(listaA, listaB));

// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
// let listaDeNumeros = [15, 4, 6, 8, 10];

// function cuadrado() {
//     return listaDeNumeros.map(num => num ** 2)
// }

// console.log(cuadrado());
