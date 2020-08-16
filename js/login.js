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
    var errorcontrasenia = document.getElementById('errorcontrasenia');
    if (y == '') {
        return errorcontrasenia.innerHTML = 'Introduzca Contraseña';
    }
    }

function validacionx(){
    var x = document.forms['formulario']['nombre'].value;
    if (x !== '' || x !== null) {
     return true
    }
    }
function validaciony(){
    var y = document.forms['formulario']['contrasenia'].value;
    if(y !== '' || y !== null){
        return true
    }
}

function inicio(){
        if(validacionx() && validaciony()){
        return window.location.href = 'indexreal.html';
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