// Variables de Tipo Objeto

// Object: colección de propiedades clave-valor
let person = {
    name: 'Juan de los Palotes',
    ocupation: 'Developer',
    address: {
        general: 'Calle El Limón, #16, Los Cajuiles.',
        city: 'Santiago de los Caballeros',
        country: 'República Dominicana',
    }
}

// Array con valores numéricos: matriz, Lista ordenada de valores.
let numbers = [5, 6, 85, 65, 3.14, 780];
//console.log('numbers[4]', numbers[4]);

// Array con valores strings
let customers = ['Guillermina Peralta', "Stephany Acosta", "Josué Manuel Jimenez"];
console.log('customers[0]', customers[0]);

// Date: objeto que representa una fecha y hora
let today = new Date();
//alert(today);

// RegExp: representa una expresión regular
let patron = /ab+c/;

// Objeto Map(): Colección de pares clave-valor 
let map = new Map();
map.set('clave', 'valor');
map.set('clave2', 'valor2');
map.get('clave'); // results = valor

// Objeto Set: collección de valores únicos
let unique_collection = new Set();
unique_collection.add(12);
unique_collection.add(10);
unique_collection.clear(); // limpia todo el objeto
unique_collection.delete('clave2'); // elimina el índice con su valor



// Ejemplos Combinados

// Declaración de variables con diferentes tipos
let number = 10;
let text = 'Hola';
let isTrue = true;
let isTrueToo = 1;
let empty = null;
let undefinedVar;









