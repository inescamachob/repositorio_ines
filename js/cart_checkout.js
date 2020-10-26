let checkoutmensaje = "";

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_BUY_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            checkoutmensaje = resultObj.data;

        }
        document.getElementById('checkoutexitoso').innerHTML = checkoutmensaje.msg;
    });
});

