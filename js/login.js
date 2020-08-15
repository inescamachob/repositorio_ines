//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
//document.addEventListener("DOMContentLoaded", function(e) {
//});

function login(){
    var x = document.forms['formulario']['nombre'].value;
    var error = document.getElementById('errorusuario');
    if (x == '') {
     error.innerHTML = 'Introduzca Usuario';
     return false
    }
    var y = document.forms['formulario']['contrasenia'].value;
    var errorcontrasenia = document.getElementById('errorcontrasenia');
    if (y == '') {
     errorcontrasenia.innerHTML = 'Introduzca Contraseña';
     return false
    }
    }


/*function inicio() {
    location.replace('https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_redirect_webpage')
}*/

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