//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener('DOMContentLoaded', function(e) {
    document.getElementById('storage').innerHTML = miStorage.getItem('Keynombre') });


var product = {};

function showProducts(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let images = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail zoom" src="` + images + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;

            let productNameHTML  = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productCountHTML = document.getElementById("productSoldCount");
            let productCostHTML = document.getElementById("productCost");
            let productCurrencyHTML = document.getElementById("productCurrency");
            let productCriteriaHTML = document.getElementById("productCategory");
        
            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productCostHTML.innerHTML = product.cost;
            productCurrencyHTML.innerHTML = product.currency;
            productCountHTML.innerHTML = product.soldCount;
            productCriteriaHTML.innerHTML = product.category;

            showProducts(product.images);
        }
    });
});

 comment = [];

function showComment(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let comment = array[i];

        htmlContentToAppend += `
        <br>
        <div class='container'>
          <div class="row">
            <div class="col-sm-1">
            <img style='margin-right: auto; margin-left: auto; display: block; max-width: 100%; height: auto; vertical-align: middle;' src="img/icono_login.jpg">
            </div>
            <div class="col-sm-5">
            <strong>`+ comment.user + `</strong> <span class="text-muted" id='estrellas'> Puntuacion: ` + '' + comment.score + `</span>
            <div class="panel-body">
            ` + comment.description + ` 
            <br>
            <small class="text-muted"> Fecha: ` + comment.dateTime +`</small>
            </div>
            </div>
          </div>
        </div>
        `
        document.getElementById("score").innerHTML = htmlContentToAppend;
    }
}



document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            comment = resultObj.data;

            showComment(comment);
        }
    });
});

relatedProducts = [];

function ShowrelatedProduct(array){

    let htmlContentToAppend = "";
        let relatedProduct1 = array[1];
        let relatedProduct3 = array[3];

        htmlContentToAppend += `

                    <div class="container text-center my-3">
                    <div class="row mx-auto my-auto">
                        <div id="recipeCarousel" class="carousel slide w-100" data-ride="carousel">
                            <div class="carousel-inner w-100" role="listbox">
                                <div class="carousel-item active">
                                    <div class="col-md-4 mx-auto">
                                        <div class="card card-body">
                                            <img class="img-fluid" src="` +  relatedProduct1.imgSrc + `">
                                            <h4 class="card-title">` + relatedProduct1.name + `</h4>
                                            <p class="card-text">` +  relatedProduct1.currency + ' ' +  relatedProduct1.cost +`</p>
                                            <p class="card-text">` +  relatedProduct1.description + `</p>
                                            <a class="btn btn-danger btn-sm"" href='products.html'>Ver producto</a> 
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="col-md-4 mx-auto">
                                        <div class="card card-body">
                                        <img class="img-fluid" src="` +  relatedProduct3.imgSrc + `">
                                        <h4 class="card-title">` + relatedProduct3.name + `</h4>
                                        <p class="card-text">` +  relatedProduct3.currency + ' ' +  relatedProduct3.cost +`</p>
                                        <p class="card-text">` +  relatedProduct3.description + `</p>
                                        <a class="btn btn-danger btn-sm"" href='products.html'>Ver producto</a> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a class="carousel-control-prev w-auto" href="#recipeCarousel" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next w-auto" href="#recipeCarousel" role="button" data-slide="next">
                                <span class="carousel-control-next-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>



            `     
            document.getElementById("relatedProducts-list").innerHTML = htmlContentToAppend;
        }
    
        document.addEventListener("DOMContentLoaded", function(e){
            getJSONData(PRODUCTS_URL).then(function(resultObj){
                if (resultObj.status === "ok")
                {
                    relatedProducts = resultObj.data;
        
                    ShowrelatedProduct(relatedProducts);
                }
            });
        });



function mensajes(){
    var x = document.getElementById('comentarios').value;
    var mensaje = document.getElementById('comentarioenviado');
    var errormensaje = document.getElementById('comentarionoenviado');
    if (x !== '') {
        document.getElementById('comentarios').style.borderColor = 'green';
        errormensaje.innerHTML = '';    
        return true
    }
    else {
        mensaje.innerHTML = '';
        document.getElementById('comentarios').style.borderColor = 'red';
        errormensaje.innerHTML = 'Debes ingresar comentario';
        return false
    }
  }


  function validarestrellas() {
    var errorestrellas = document.getElementById('errorestrellas');
    var radios = document.getElementsByName("estrellas");
    var valido = false;
    var i = 0;

    while (!valido && i < radios.length) {
        if (radios[i].checked) {
        valido = true;
        }
        i++;        
    }
    if (!valido) {
        errorestrellas.innerHTML = 'Debes calificar el producto';
        return valido;
        }
    else {
        errorestrellas.innerHTML = '';
        return valido
        }
    }



function enviado() {
        var mensaje = document.getElementById('comentarioenviado');
        var comentarionuevo = document.getElementById('comentarios').value;
        var usercomentario = miStorage.getItem('Keynombre');
        let htmlContentToAppend = '';
        if (mensajes() && validarestrellas()) {
            mensaje.innerHTML = 'Tu comentario se envio correctamente';
            htmlContentToAppend += `
            <div class='container'>
            <div class="row">
              <div class="col-sm-1">
              <img style='margin-right: auto; margin-left: auto; display: block; max-width: 100%; height: auto; vertical-align: middle;' src="img/icono_login.jpg">
              </div>
              <div class="col-sm-5">
              <strong >`+ usercomentario + `  </strong> <span class="text-muted"> Puntuacion:</span>
              <div class="panel-body"> `+ comentarionuevo + ` 
              <br>
              <small class="text-muted"> Fecha:</small>
              </div>
              </div>
            </div>
          </div>`
        }
        document.getElementById("nuevocomentario").innerHTML = htmlContentToAppend;
    }
    
