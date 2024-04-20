var proyectos = []
var tareasProyectos = []

function agregarProyecto(){
    var nombreProyecto = document.getElementById("inputProyecto").value
    nombreProyecto.innerHTML = ""
    var descripcionProyecto = document.getElementById("inputDescripcion").value
    descripcionProyecto.innerHTML = ""
    if(nombreProyecto != ""){
        for(var i = 0; i < proyectos.length; i++){
            if(proyectos.nombre[i] != nombreProyecto){
                proyectos.push({
                    idProyecto: Math.floor(Math.random()),
                    nombre: nombreProyecto,
                    descripcion: descripcionProyecto
                })
                mostrarProyectos();
            }
            else{
                alert("Dos proyectos no pueden tener el mismo nombre")
            }
        }
    }else{
        alert("Es obligatorio que pongas un nombre al proyecto")
    }

}

function agregarTareaProyecto(idProyecto){
    var nombreProyecto = document.getElementById("inputProyecto")
    proyectos.forEach(proyecto => {
        if(proyecto.nombre === nombreProyecto){
            var descripcionTarea = getElementById("inputTarea")
            descripcionTarea.innerHTML = ""
            var estadoTarea = "Pendiente"
            var fechaVen = new Date(document.getElementsById("inputFecha"))
            fechaVen.innerHTML = ""
            if(descripcionTarea != ""){
                tareasProyectos.push({
                    idTarea: Math.floor(Math.random()),
                    idProyecto: idProyecto,
                    descripcion: descripcionTarea,
                    estado: estadoTarea,
                    fechaVencimiento: fechaVen
                })
                mostrarTareas();
            }else{
                alert("La descripcion es obligatoria")
            }
        }else{
            alert("No existe un proyecto con ese nombre")
        }
    });
}

function mostrarTareas() {
    let proyectosHTML = document.getElementById('inputProyectos');
    proyectosHTML.innerHTML = '';
    let nombreProyecto = document.getElementById('proyecto').value;
    let proyecto = arrayProyectos.find(proyecto => proyecto.nombre === nombreProyecto);
    if (proyecto) {
        let proyectoDiv = document.createElement('div');
        proyectoDiv.classList.add('proyecto');

        let nombreProyectoHeader = document.createElement('h2');
        nombreProyectoHeader.textContent = proyecto.nombre;

        let descripcionProyecto = document.createElement('p');
        descripcionProyecto.textContent = proyecto.descripcion;

        proyectoDiv.appendChild(nombreProyectoHeader);
        proyectoDiv.appendChild(descripcionProyecto);

        let tareasList = document.createElement('ul');
        proyecto.tareas.forEach(tarea => {
            let tareaItem = document.createElement('li');
            let checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    tareaItem.style.textDecoration = "line-through";
                } else {
                    tareaItem.style.textDecoration = "none";
                }
            });
            
            let tareaNombre = document.createElement('span');
            let nom = tarea.nombre;
            tareaNombre.textContent = "Nombre: " + nom.nombre + ", Descripción: " + nom.descripcion + ", Fecha: " + nom.fecha;
            
            tareaItem.appendChild(checkbox);
            tareaItem.appendChild(tareaNombre);
            tareasList.appendChild(tareaItem);
        });

        proyectoDiv.appendChild(tareasList);
        proyectosHTML.appendChild(proyectoDiv);
    } else {
        console.log("No se encontró ningún proyecto con el nombre '" + nombreProyecto + "'.");
    }
}

function tareaCompletada(idProyecto, idTarea){
    for(var i = 0; i < proyectos.length; i++){
        if(proyectos[i].idProyecto === idProyecto && proyectos[i].idTarea === idTarea){
            tareasProyectos.push(["estado", "Completado" ])
        }
    }
}

function buscarPorFecha(){
    var fechaBuscada = document.getElementById("inputFecha")
    fechaBuscada.innerHTML = ""
    for(var i = 0; i < tareasProyectos; i++){
        if(tareasProyectos[i].fechaVencimiento === fechaBuscada){
            let tarea = tareasProyectos[i].fechaVencimiento
            tarea = createElement('p')
            mostrarTareas()
        }
    }
}

function mostrarProyectos(){
    var nombreProyecto = document.getElementById("inputProyecto")
    nombreProyecto.innerHTML = ""
    proyectos.forEach(proyecto => {
        var li = document.createElement('li')
        li.textContent = proyecto.nombre
        nombreProyecto.appendChild(li)
    }) 
}