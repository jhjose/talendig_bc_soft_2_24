// ================ Ciclo o Bucle: for ======================
/*
for (inicialización; condición; incremento){
    // Código a ejecutar en cada iteración
}
*/
/*
for(let i = 0; i < 5; i++){
    //console.log('i', i)
}
*/


// ================ Ciclo o Bucle: while ======================
let i1 = 0;
let i2 = 0;
let i3 = 0;

while(i1 <= 5){
    //console.log('i', i);
    i1++;
}



// ================ Ciclo o Bucle: do...while ======================
do {
    //console.log('i', i);
    i2++;
    
    if(i2 >= 10){
        break;
    }
} while (i2 < 5);



// ================ Ciclo o Bucle: for...in ======================
const object = {
    a: 1, b: 2, c: 3
};

const customers = {
    customer: 'Javier Milley',
    customer2: 'Teresita Matías'
}

for (let index in object){
    //console.log(index, object[index]);
}

for (let index in customers){
    //console.log(index, customers[index]);
}


// ================ Ciclo o Bucle: for...of ======================
const another_customers = ['Miguelina Mateo', 'Mayra Sosa', 'Julian Acosta'];

for (let value of another_customers){
    console.log(value);
}


// ================ Ciclo o Bucle: "break" and "continue" ======================
for(let i3 = 0; i3 < 5; i3++){
    if(i3 === 3){
        break;
    }
    if(i3 === 1){
        continue; // Salta la iteración cuando i es 1
    }
    console.log(i3); // Imprime 0, 2
}