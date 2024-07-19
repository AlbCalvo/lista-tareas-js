
function agregarTarea() {
    
    // Captura de tarea por pantalla.
    let nuevaTareaTxt = document.getElementById("nuevaTarea").value;

    // Validar que la tarea está informada.
    if (nuevaTareaTxt === "") {
        alert("Warning: La tarea debe estar informada.");
        return;
    }
        
    //Crear elemento en la lista
    let nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = nuevaTareaTxt + " ";

    /* alert("hola"); */
    

    //Crear botón eliminar
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function () { nuevaTarea.remove(); }
    

    //Agregar botón de eliminar al elemento de la lista
    nuevaTarea.appendChild(botonEliminar);

    //Agregar la nueva tarea (incluye botón eliminar) a la lista de tareas.
    document.getElementById("listaTareas").appendChild(nuevaTarea);

    //Inicializar imput de la tarea 
    document.getElementById("nuevaTarea").value = "";


}

function verifica(Tarea) {
    let parrafo = document.getElementById("miParrafo");
    parrafo.textContent = Tarea;
    /* parrafo.textContent = "Texto SÍ modificado II"; */
    parrafo.style.color = "green";
}
    

const botonAgegarTareaElement = document.getElementById('botonAgegarTarea');
botonAgegarTarea.addEventListener('click', () => {
    agregarTarea();        
})




/* 
function cambiarTexto() {
    let parrafo = document.getElementById("miParrafo");
    parrafo.textContent = "Texto SÍ modificado";
    parrafo.style.color = "red";
}

const buttonElement = document.getElementById('buttonRed');
buttonElement.addEventListener('click', () => {
     let parrafo = document.getElementById("miParrafo");
    parrafo.textContent = "Texto SÍ modificado II";
    parrafo.style.color = "green";
}) */

