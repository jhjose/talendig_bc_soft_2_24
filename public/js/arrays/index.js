let array = [1,2,3,4,5];
let array2 = new Array(1,2,3,4,5);
let salaries = [100003, 80000, 65001, 150000, 200007];
let parNumbers = [];
let imparNumbers = [];
let firstElement = array[0];
let secondElement = array[1];
let fourElement = array[4];
let numbers_to_sum = [1,2,3,4,5];
let sum = 0;
let customers = [
    {name: 'David Acosta', age: 25},
    {name: 'Fiordaliza Tejeda', age: 31},
    {name: 'Charlie Brown', age: 18},
];

for (let i = 0; i < customers.length; i++){
    console.log(`El usuario ${customers[i].name} y su edad es ${customers[i].age}`);
}

for(let i = 0; i < numbers_to_sum.length; i++){
    sum += numbers_to_sum[i];
}

///console.log('sum', sum)

for (let i = 0; i < salaries.length; i++){
    if(salaries[i] % 2 === 0){
        parNumbers.push(salaries[i]);
    }else{
        imparNumbers.push(salaries[i]);
    }
}

//console.log('parNumbers', parNumbers);
//console.log('imparNumbers', imparNumbers);

for (let i = 0; i < array.length; i++){
    //console.log(i, array[i]);
}

array2.forEach((value, index)=>{
    //console.log(value, index)
});

array2.forEach(value => console.log('Este es el valor actual del ciclo del bucle: ' + value));