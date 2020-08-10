//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
});

function login() {
var x = document.forms['formulario']['nombre'].value;
if (x == '') {
    alert('Introduzca Usuario')
    return false
}

var y = document.forms['formulario']['contrasenia'].value;
if (y == '') {
    alert('Introduzca Contraseña')
    return false
}
}
