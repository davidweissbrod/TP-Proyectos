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
    var nombreProyecto = document.getElementById("proyectoNom")
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
    var proy = document.getElementById("proyectos")
    proy.innerHTML = ""
    var nombreProyecto = document.getElementById('nombreProyecto').value;
    proyectos.forEach(proyecto => {
        if(proyecto[i].nombre === nombreProyecto){
            var proyectoDiv = document.createElement('div')
            proyectoDiv.classList.add('proyecto')
            var proyectoHeader = document.createElement('h2')
            proyectoHeader.textContent = proyecto.nombre
            var descripcionProyecto = document.createElement('p')
            descripcionProyecto.textContent = proyecto.descripcion

            proyectoDiv.appendChild(proyectoHeader);
            proyectoDiv.appendChild(descripcionProyecto);

            var listaTareas = document.createElement("ul")
            proyecto.tareas.forEach(tarea => {
            var tareaItem = document.createElement('li');
            var checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.addEventListener('change', function() {
                if (this.checked){
                    proyecto.estado = "Completado"
                } 
            });
                
                var tareaNombre = document.createElement('span');
                var tar = tarea.nombre;
                tareaNombre.textContent = "Nombre: " + tar.nombre + ", Descripción: " + tar.descripcion + ", Fecha: " + tar.fecha;
                
                tareaItem.appendChild(checkbox);
                tareaItem.appendChild(tareaNombre);
                listaTareas.appendChild(tareaItem);
            });
    
            proyectoDiv.appendChild(tareasList);
            proy.appendChild(proyectoDiv);
        }
    })
}


function buscarPorFecha(){
    var fechaVencimiento = document.getElementById('buscarFecha').value;
    var tareas = proyectos.flatMap(proyecto => proyecto.tareas.filter(tarea => tarea.fechaVencimiento === fechaVencimiento))
    var listaTareas = document.getElementById('taskList')
    listaTareas.innerHTML = ''
    tareas.forEach((tarea) => {
        var listaItem = document.createElement('li');
        listaItem.textContent = tarea.descripcion + "Estado: " + tarea.estado + "Fecha de vencimiento: " + tarea.fecha 
        listaTareas.appendChild(listItem)
    }); 
}

function mostrarProyectos(){
    var proy = document.getElementById('proyectos');
    proy.innerHTML = '';
    proyectos.forEach(proyecto =>{
        var proyectoDiv = document.createElement('div');
        proyectoDiv.classList.add('proyecto'); 
        var nombreProyecto = document.createElement('h2');
        nombreProyecto.textContent = proyecto.nombre;  
        var descripcionProyecto = document.createElement('p');
        descripcionProyecto.textContent = proyecto.descripcion; 
        proyectoDiv.appendChild(nombreProyecto);
        proyectoDiv.appendChild(descripcionProyecto);
        proy.appendChild(proyectoDiv);
    })
}