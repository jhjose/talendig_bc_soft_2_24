// Funciones Declaradas (Function Declarations)
function suma(a, b){
    return a + b;
}

function resta(a, b){
    return a - b;
}

function multiplicacion(a, b){
    return a * b;
}

function division(a, b){
    return a / b;
}


// Funciones Expresadas (Function Expressions)
const showMessage = function(message){
    alert(message);
}

// Funciones Flecha (Arrow Functions) ES6
const suma2 = (a, b) => {
    return a + b;
}

// Funciones de Flecha con expresión más corta
const suma3 = (a, b) => a + b;

// Funciones de Flecha versión más corta
const getMessage = message => 'Este es el mensaje ' + message;

// Funciones Anónimas
setTimeout(function(){
    console.log('Hello world')
}, 3000);

let count = 0;

setInterval(()=>{
    count++;
    console.log(count)
}, 2000)
