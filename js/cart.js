//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener('DOMContentLoaded', function(e) {
    document.getElementById('storage').innerHTML = miStorage.getItem('Keynombre') });

    cartList = [];

    function showCart(array){

        let htmlContentToAppend = "";
    
        for(let i = 0; i < array.length; i++){
            let articles = array[i];

            if(articles.currency == 'USD') {
                articles.unitCost = articles.unitCost * 40;
                articles.currency = 'UYU';
            }
    
            htmlContentToAppend += `
                    <div class="container mb-4">
                    <div class="row">
                        <div class="col-12">
                            <div class="table-responsive">
                                <table class="table table-striped ">
                                    <thead>
                                        <tr>
                                            <th scope="col"> </th>
                                            <th scope="col">Producto</th>
                                            <th scope="col">Disponibilidad</th>
                                            <th scope="col" class="text-center">Cantidad</th>
                                            <th scope="col" class="text-right">Precio unitario</th>
                                            <th> </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><img src="` + articles.src + `" class="img-thumbnail" style='height: 200px; overflow: hidden;'></td>
                                            <td>` + articles.name + `</td>
                                            <td>En stock</td>
                                            <td>
                                            <select name='cantidad' id='cantidad' onchange='subtotal();'>
                                            <option>` +  articles.count + `</option>
                                            <option value='1'>1</option>
                                            <option value='2'>2</option>
                                            <option value='3'>3</option>
                                            <option value='4'>4</option>
                                            <option value='5'>5</option>
                                            <option value='6'>6</option>
                                            <option value='7'>7</option>
                                            <option value='8'>8</option>
                                            <option value='9'>9</option>
                                            <option value='10'>10</option>
                                            </select>
                                            </td>
                                            <td class="text-right">` + articles.currency + ' '+ `<span name='costo'> `+ articles.unitCost + `</span></td>
                                            <td class="text-right"><button class="btn btn-sm btn-danger"><i class="fa fa-trash"></i> </button> </td>
                                        </tr>
                                        <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td class='text-right'>Total por producto</td>
                                        <td class="text-right" id='totalproducto`+i+`'></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        </div>
                        </div>
                        `
            document.getElementById("show-cartList").innerHTML = htmlContentToAppend;
        }
         subtotal(); 
    }


    function subtotal(){
        let valor = document.getElementsByName('cantidad');
        let costo = document.getElementsByName('costo');
        var st = 0;

        for(i = 0; i < valor.length; i++) {
            st += parseInt(valor[i].value) * parseInt(costo[i].innerHTML);
            document.getElementById('totalproducto'+i).innerHTML = 'UYU' + ' ' + parseInt(valor[i].value) * parseInt(costo[i].innerHTML);
         }

        document.getElementById('subtotal').innerHTML = st;
        document.getElementById('total').innerHTML = '';
        document.getElementById('precioenvio').innerHTML = '';
        $('#envio').val([0]);
        }

    function envio(valorenvio){
        if (valorenvio == 1){
                env = parseInt(document.getElementById('subtotal').innerHTML) * 0.05;
                return document.getElementById('precioenvio').innerHTML = env;
            }
            else {
                if (valorenvio == 2){
                    env = parseInt(document.getElementById('subtotal').innerHTML) * 0.07;
                    return document.getElementById('precioenvio').innerHTML = env;
                }
                else {
                    if (valorenvio == 3){
                        env = parseInt(document.getElementById('subtotal').innerHTML) * 0.15;
                        return document.getElementById('precioenvio').innerHTML = env;
                    }
                }
            }
        }


    document.addEventListener("DOMContentLoaded", function(e){
        getJSONData(CART_DESAFIATE_URL).then(function(resultObj){
            if (resultObj.status === "ok")
            {
                cartList = resultObj.data;
    
                showCart(cartList.articles);
            }
        });
    });


    function validar(){
        var x = document.getElementById('envio').value;
        var errorenvio = document.getElementById('errorenvio');
        if (x == 0) {
            document.getElementById('envio').style.borderColor = 'red';
            errorenvio.innerHTML = 'Debe seleccionar metodo de envio'; 
            return false
        }
        else {
            x != 0;
            document.getElementById('envio').style.borderColor = 'green';
            errorenvio.innerHTML = '';  
            return true
        }
      }


      $(document).ready(function(){
        $("#show").click(function(){
          $("#staticBackdrop").modal('show');
        });
        });


        function validarpago() {
        var pago = document.getElementsByName('tarjeta');
        var errorformadepago = document.getElementById('errorformadepago');
        var valido = false;
        var i = 0;
    
        while (!valido && i < pago.length) {
            if (pago[i].checked) {
            valido = true;
            }
            i++;        
        }
        if (!valido) {
            errorformadepago.innerHTML = 'Debe seleccionar forma de pago';
            return valido;
            }
        else {
            errorformadepago.innerHTML = '';
            return valido
            }
        }
       
        function validardatos() {
            var nombretarjeta = document.forms['infotarjeta']['nombre'].value;
            var numerotarjeta = document.forms['infotarjeta']['numerotarjeta'].value;
            var fechatarjeta = document.forms['infotarjeta']['fechatarjeta'].value;
            var cvv = document.forms['infotarjeta']['cvv'].value;
            var errortarjeta = document.getElementById('errortarjeta');
            if (nombretarjeta !== '') {
                document.getElementById('nombre').style.borderColor = 'green';
                errortarjeta.innerHTML = '';
            }
            else {
                errortarjeta.innerHTML = 'Debe ingresar nombre';
                document.getElementById('nombre').style.borderColor = 'red'; 
            }
            if (nombretarjeta !== '' && numerotarjeta == '') {
                document.getElementById('numerotarjeta').style.borderColor = 'red';
                errortarjeta.innerHTML = 'Debe ingresar numero'; 
                
            }
            else { 
                if (nombretarjeta !== '' && numerotarjeta !== ''){
                    document.getElementById('numerotarjeta').style.borderColor = 'green';
                    errortarjeta.innerHTML = '';
            }
            }
            if (nombretarjeta !== '' && numerotarjeta !== '' && fechatarjeta == '') {
                document.getElementById('fechatarjeta').style.borderColor = 'red';
                errortarjeta.innerHTML = 'Debe ingresar fecha de vencimiento'; 
                
            }
            else { 
                if (nombretarjeta !== '' && numerotarjeta !== '' && fechatarjeta !== ''){
                    document.getElementById('fechatarjeta').style.borderColor = 'green';
                    errortarjeta.innerHTML = '';
            }
            }
            if (nombretarjeta !== '' && numerotarjeta !== '' && fechatarjeta !== '' && cvv == '') {
                document.getElementById('cvv').style.borderColor = 'red';
                errortarjeta.innerHTML = 'Debe ingresar cvv'; 
                
            }
            else { 
                if (nombretarjeta !== '' && numerotarjeta !== '' && fechatarjeta !== '' && cvv !== ''){
                    document.getElementById('cvv').style.borderColor = 'green';
                    errortarjeta.innerHTML = '';
                    return true
            }
            }
        }

function validartodo() {
    if(validardatos() && validarpago()){
        $("#staticBackdrop").modal('hide');
    }
    return true
}

function total() {
    var suma = parseInt(document.getElementById('subtotal').innerHTML) + parseInt(document.getElementById('precioenvio').innerHTML);
    document.getElementById('total').innerHTML = suma;
}

function checkout(){
    var errorcheckout = document.getElementById('errorcheckout');
    if(validardatos() && validarpago() &&validar()){
        window.location.href = 'cart_checkout.html';
    }
    else {
        errorcheckout.innerHTML = 'Debe seleccionar forma de pago'; 
    }
}