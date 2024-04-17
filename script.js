var proyectos = []
var tareasProyectos = []

function agregarProyecto(){
    var nombreProyecto = document.getElementById("inputProyecto")
    nombreProyecto.innerHTML = ""
    var descripcionProyecto = document.getElementById("inputDescripcion")
    descripcionProyecto.innerHTML = ""
    if(nombreProyecto != ""){
        for(var i = 0; i < proyectos.length; i++){
            if(proyectos.nombre[i] != nombreProyecto){
                proyectos.push({
                    idProyecto: Math.floor(Math.random()),
                    nombre: nombreProyecto,
                    descripcion: descripcionProyecto
                })
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
    var descripcionTarea = document.getElementById("inputTarea")
    descripcionTarea.innerHTML = ""
    if(descripcionTarea != ""){
        tareasProyectos.push({
            idTarea: Math.floor(Math.random()),
            idProyecto: idProyecto,
            descripcion: descripcionTarea,
            estado: "Pendiente",
            fechaVencimiento: "2024-04-12"
        })
    }else{
        alert("La descripcion es obligatoria")
    }
}

function mostrarTareas(idTarea){
    for(var i = 0; i < tareasProyectos.length; i++){
        if(tareasProyectos.idTarea[i] === tareasProyectos.idTarea){
            tareasProyectos[i].descripcion = document.createElement("p")
            tareasProyectos[i].estado = document.createElement("p")
            tareasProyectos[i].fechaVencimiento = document.createElement("p")
        }
    }
}

function tareaCompletada(idProyecto, idTarea){
    for(var i = 0; i < proyectos.length; i++){
        if(proyectos[i].idProyecto === idProyecto && proyectos[i].idTarea === idTarea){
            tareasProyectos.push(["estado", "Completado" ])
        }
    }
}

function mostrarProyectos(){
    
}