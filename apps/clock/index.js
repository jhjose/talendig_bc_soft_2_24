function updateTime(elem_id){
    const timeElement = document.getElementById(elem_id);
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Actualizar el reloj cada segundo
setInterval(updateTime, 1000);

// Inicializar el reloj al cargar la página
updateTime('time');