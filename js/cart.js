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
                                            <th scope="col" class="text-right">Precio</th>
                                            <th> </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><img src="` + articles.src + `" class="img-thumbnail" style='height: 200px; overflow: hidden;'></td>
                                            <td>` + articles.name + `</td>
                                            <td>En stock</td>
                                            <td>
                                            <select name='cantidad' id='cantidad' onchange='subtotal()'>
                                            <option>` +  articles.count + `</option>
                                            <option value='0'>0</option>
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
        }

        document.getElementById('subt').innerHTML = st;
    }

   /* function muestraSubtotal(){
        window.open(subtotal(st));
    }*/

    document.addEventListener("DOMContentLoaded", function(e){
        getJSONData(CART_DESAFIATE_URL).then(function(resultObj){
            if (resultObj.status === "ok")
            {
                cartList = resultObj.data;
    
                showCart(cartList.articles);
            }
        });
    });


   /* function subtotal(valor , precio) {
       st = (valor * precio);
        return st;


        function subtotal(valor, costo){
        
        var st = valor * costo;

        document.getElementById('subt').innerHTML = st;
    }

    }*/


   
