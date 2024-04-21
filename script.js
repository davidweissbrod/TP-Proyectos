var proyectos = []
function Tarea(descripcion, fecha, estado) {
    this.descripcion = descripcion;
    this.fecha = fecha;
    this.estado = estado;
}
function Proyecto(nombre, descripcion) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.tareas = [];
    this.agregarTarea = function(nombre, descripcion, fecha) {
        let nuevaTarea = new Tarea(nombre, descripcion, fecha);
        this.tareas.push(nuevaTarea);
    }
}
function agregarProyecto(){
    var nombreProyecto = document.getElementById("inputProyecto").value
    nombreProyecto.innerHTML = ""
    var descripcionProyecto = document.getElementById("inputDescripcion").value
    descripcionProyecto.innerHTML = ""
    if(nombreProyecto != ""){
        for(var i = 0; i < proyectos.length; i++){
            if(proyectos.nombre[i] != nombreProyecto){
                var proyectoIngresado = new Proyecto(nombreProyecto, descripcionProyecto)
                proyectos.push(proyectoIngresado)
                mostrarProyectos();
            
            }else{
                alert("Dos proyectos no pueden tener el mismo nombre")
            }
        }
    }else{
        alert("Es obligatorio que pongas un nombre al proyecto")
    }

}

function agregarTareaProyecto(){
    var nombreProyecto = document.getElementById("inputProyecto")
    proyectos.forEach(proyecto => {
        if(proyecto.nombre === nombreProyecto){
            var descripcionTarea = getElementById("inputTarea")
            descripcionTarea.innerHTML = ""
            var estadoTarea = "Pendiente"
            var fechaVen = new Date(document.getElementsById("inputFecha"))
            fechaVen.innerHTML = ""
            var tareaIngresada = new Tarea(descripcionTarea, fechaVen, estadoTarea)
            if(descripcionTarea != ""){
                proyectos[i].agregarTarea(tareaIngresada)
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
    
}

function tareaCompletada(){
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
            tarea = document.createElement('p')
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