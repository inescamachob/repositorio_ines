//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

let localst = window.localStorage;

document.addEventListener('DOMContentLoaded', function(e) {
    document.getElementById('storage').innerHTML = miStorage.getItem('Keynombre') });
    document.addEventListener('DOMContentLoaded', function(e) {
        document.getElementById('storageperfil').innerHTML = miStorage.getItem('Keynombre') ; 
    
                    // Funcion para cargar los datos del JSON de miperfil
            miperfil = JSON.parse(localst.getItem('keyDatosPerfil'))

            document.getElementById('nombrePerfil').value = miperfil.nombre;
            document.getElementById('apellidoPerfil').value = miperfil.apellido;
            document.getElementById('email').value = miperfil.email;
            document.getElementById('direccion').value = miperfil.direccion;
            document.getElementById('telefono').value = miperfil.telefono;
            document.getElementById('edad').value = miperfil.edad;
    
    });


//Esta funcion guarda todos los valores de los inputs en mi sessionstorage al apretar el boton de 'save'
   function guardardatosperfil() {
            var  miperfil = {
                'nombre' : document.getElementById('nombrePerfil').value,
                'apellido' : document.getElementById('apellidoPerfil').value,
                'edad' : document.getElementById('edad').value,
                'telefono' : document.getElementById('telefono').value,
                'email' : document.getElementById('email').value,
                'direccion' : document.getElementById('direccion').value
                }
        if(validardatosperfil()){
        localStorage.setItem('keyDatosPerfil', JSON.stringify(miperfil));
        window.location = 'my-profile.html'
        }
   }

// Funcion para habilitar editar datos

function editar(){
    document.getElementById('nombrePerfil').disabled = false;
    document.getElementById('apellidoPerfil').disabled = false;
    document.getElementById('edad').disabled = false;
    document.getElementById('telefono').disabled = false;
    document.getElementById('email').disabled = false;
    document.getElementById('direccion').disabled = false;
   }

   //Esta funcion valida todos los campos y pone error al no completarlos  
   function validardatosperfil() {
    var nombreP = document.getElementById('nombrePerfil').value;
    var apellidoP = document.getElementById('apellidoPerfil').value;
    var edadP = document.getElementById('edad').value;
    var telefonop = document.getElementById('telefono').value;
    var emailp = document.getElementById('email').value;
    var direccionp = document.getElementById('direccion').value;
    if (nombreP !== '') {
        document.getElementById('nombrePerfil').style.borderColor = 'green';
        document.getElementById('errornombre').innerHTML = '';
    }
    else {
        document.getElementById('errornombre').innerHTML = 'Debe ingresar nombre';
        nombreP.style.borderColor = 'red'; 
    }
    if (nombreP !== '' && apellidoP == '') {
        document.getElementById('apellidoPerfil').style.borderColor = 'red';
        document.getElementById('errorapellido').innerHTML = 'Debe ingresar apellido'; 
        
    }
    else { 
        if (nombreP !== '' && apellidoP !== ''){
            document.getElementById('apellidoPerfil').style.borderColor = 'green';
            document.getElementById('errorapellido').innerHTML = '';
    }
    }
    if (nombreP !== '' && apellidoP !== '' && edadP == '') {
        document.getElementById('edad').style.borderColor = 'red';
        document.getElementById('erroredad').innerHTML = 'Debe ingresar su edad'; 
        
    }
    else { 
        if (nombreP !== '' && apellidoP !== '' && edadP !== ''){
            document.getElementById('edad').style.borderColor = 'green';
            document.getElementById('erroredad').innerHTML = '';
    }
    }
    if (nombreP !== '' && apellidoP !== '' && edadP !== '' && telefonop == '') {
        document.getElementById('telefono').style.borderColor = 'red';
        document.getElementById('errortelefono').innerHTML = 'Debe ingresar su telefono'; 
        
    }
    else { 
        if (nombreP !== '' && apellidoP !== '' && edadP !== '' && telefonop !== ''){
            document.getElementById('telefono').style.borderColor = 'green';
            document.getElementById('errortelefono').innerHTML = '';
    }
    }
    if (nombreP !== '' && apellidoP !== '' && edadP !== '' && telefonop !== '' && emailp == '') {
        document.getElementById('email').style.borderColor = 'red';
        document.getElementById('erroremail').innerHTML = 'Debe ingresar su email'; 
        
    }
    else { 
        if (nombreP !== '' && apellidoP !== '' && edadP !== '' && telefonop !== '' && emailp !== ''){
            document.getElementById('email').style.borderColor = 'green';
            document.getElementById('erroremail').innerHTML = '';
    }
    }
    if (nombreP !== '' && apellidoP !== '' && edadP !== '' && telefonop !== '' && emailp !== '' && direccionp == '') {
        document.getElementById('direccion').style.borderColor = 'red';
        document.getElementById('errordireccion').innerHTML = 'Debe ingresar su domicilio'; 
        
    }
    else { 
        if (nombreP !== '' && apellidoP !== '' && edadP !== '' && telefonop !== '' && emailp !== '' && direccionp !== ''){
            document.getElementById('direccion').style.borderColor = 'green';
            document.getElementById('errordireccion').innerHTML = '';
            return true
    }
    }
}

//Funcion para borrar datos

function borrarDatos() {
    localst.removeItem('keyDatosPerfil')
}



