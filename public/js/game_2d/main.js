// Configuración del lienzo
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Variables del jugador
let playerX = canvas.width / 2;
let playerY = canvas.height / 2;
const playerSize = 20;
let playerSpeed = 5;

// Variables de control de movimiento
let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;

// Event listeners para las teclas
document.addEventListener('keydown', keyDownHandler); // Detecta cuando el usuario pulsa una tecla
document.addEventListener('keyup', keyUpHandler); // Detecta cuando el usuario suelta la tecla

function keyDownHandler(event){
    if(event.key === 'ArrowUp' || event.key === 'Up'){
        upPressed = true;
    }
    if(event.key === 'ArrowDown' || event.key === 'Down'){
        downPressed = true;   
    }
    if(event.key === 'ArrowLeft' || event.key === 'Left'){
        leftPressed = true;
    }
    if(event.key === 'ArrowRight' || event.key === 'Right'){
        rightPressed = true;
    }
}

function keyUpHandler(event){
    if (event.key === 'ArrowUp' || event.key === 'Up') {
        upPressed = false;
    }
    if (event.key === 'ArrowDown' || event.key === 'Down') {
        downPressed = false;
    }
    if (event.key === 'ArrowLeft' || event.key === 'Left') {
        leftPressed = false;
    }
    if (event.key === 'ArrowRight' || event.key === 'Right') {
        rightPressed = false;
    }
}

// Función para dibujar el jugador
function drawPlayer(){
    ctx.beginPath();
    ctx.rect(playerX, playerY, playerSize, playerSize);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
}

// Función para actualizar la posición del jugador
function updatePlayerPosition(){
    if(upPressed && playerY > 0){
        playerY -= playerSpeed;
    }
    if(downPressed && playerY < canvas.height - playerSize){
        playerY += playerSpeed;
    }
    if(leftPressed && playerX > 0){
        playerX -= playerSpeed;
    }
    if(rightPressed && playerX < canvas.width - playerSize){
        playerX += playerSpeed;
    }
}

// Función principal del juego
function gameLoop(){
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el lienzo
    drawPlayer(); // Dibujar el jugador
    updatePlayerPosition(); // Actualizar la posición del jugador
    requestAnimationFrame(gameLoop); // Llamar a gameLoop de nuevo
}

// Iniciar el bucle del juego
gameLoop();