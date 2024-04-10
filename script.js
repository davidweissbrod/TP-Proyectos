var proyectos = []
var tareasProyectos = []

function agregarProyecto(){
    var nombreProyecto = document.getElementById("inputProyecto")
    nombreProyecto.innerHTML = ""
    var descripcionProyecto = document.getElementById("inputDescripcion")
    if(nombreProyecto != ""){
        proyectos.push({
            idProyecto: Math.floor(Math.random()),
            nombre: nombreProyecto,
            descripcion: descripcionProyecto
        })
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


//revisar esto
function mostrarTareasProyecto(idTarea, idProyecto){
    for(var i = 0; i < proyectos.length; i++){
        if(proyectos.idTarea = idTarea){
            tareasProyectos.descripcion = document.createElement("li")
            tareasProyectos.estado = document.createElement("li")
            tareasProyectos.fechaVencimiento = document.createElement("li")
        }
    }
}

function tareaCompletada(idProyecto, idTarea){

}