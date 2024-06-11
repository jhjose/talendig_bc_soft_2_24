// CONDICIONALES if, else if, else
let edad = 30;
let temperature = 25;
let fruit = 'Guineo';

if(edad >= 18 && edad < 20){
    
}else if(edad >= 21 && edad <= 30){
    
}else if(edad >= 31){
    
}else{
    
}

if(temperature > 30){
    //alert('Hace mucho calor');
}else if(temperature > 20){
    //alert('El clima está agradable');
}else if(temperature > 10){
    //alert('Hace un poco de frío');
}else{
    //alert('Hace mucho frío');
}

// CONDICIONALES switch
switch (edad){
    case 18:
        alert(`El usuario tiene ${edad} años`);
    break;
    case 21:
        alert(`El usuario tiene ${edad} años`);
    break;
    case 25:
        alert(`El usuario tiene ${edad} años`);
    break;
    case 30:
        alert(`El usuario tiene ${edad} años`);
    break;
}

switch(fruit){
    case 'Guineo':
        console.log(fruit);
    break;
    case 'Manzana':
        console.log(fruit);
    break;
    default:
        // 
}

// CONFIRM: confirmación del usuario con los valores que introduzca
if(confirm('Desea continuar?')){
    alert('Usted acaba de confirmar');
}else{
    alert('Nos vemos luego');
}