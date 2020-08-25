//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
//document.addEventListener("DOMContentLoaded", function(e) {
//});

function login(){
    var x = document.forms['formulario']['nombre'].value;
    var error = document.getElementById('errorusuario');
    if (x == '') {
        return error.innerHTML = 'Introduzca Usuario';
    }
    var y = document.forms['formulario']['contrasenia'].value;
    if (y == '') {
        return error.innerHTML = 'Introduzca Contraseña';
    }
    }

function validacionx(){
    var x = document.forms['formulario']['nombre'].value;
    if (x !== '') {
     return true
    }
    }
    
function validaciony(){
    var y = document.forms['formulario']['contrasenia'].value;
    if(y !== ''){
        return true
    }
}

miStorage = window.sessionStorage;

function inicio(){
    var nombre = document.getElementById('nombre').value;
        sessionStorage.setItem('Keynombre', nombre);
        if(validacionx() && validaciony()){
        return location.href = 'indexreal.html';
        }
    }


/*function login(){
var x = document.forms['formulario']['nombre'].value;
if (x == '') {
   return error.innerHTML = 'Introduzca Usuario';
}
var y = document.forms['formulario']['contrasenia'].value;
if (y == '') {
    alert('Introduzca Contraseña');
    return false;
}
}

/*function validar(){
    var parrafo = document.createElement('p');
    parrafo.innerHTML = 'Introduzca Contraseña';
    document.body.appendChild(parrafo);
    }*/