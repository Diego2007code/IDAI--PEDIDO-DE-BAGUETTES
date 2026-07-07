<script>

function calcularTotal(){

   
    let especialidad = Number(document.getElementById("especialidad").value);

    let pan = Number(document.querySelector('input[name="pan"]:checked').value);

    let ingredientes = document.querySelectorAll('.ingredientes input[type="checkbox"]');

    let totalIngredientes = 0;

    ingredientes.forEach(function(ing){
        if(ing.checked){
            totalIngredientes += Number(ing.value);
        }
    });

   
    let cantidad = Number(document.getElementById("cantidad").value);

    if(cantidad < 1){
        cantidad = 1;
    }

    let envio = 0;

    if(document.getElementById("domicilio").checked){
        envio = 30;
    }

    // Total
    let subtotal = especialidad + pan + totalIngredientes;

    let total = (subtotal * cantidad) + envio;

    document.getElementById("total").innerHTML =
        "Total: $" + total.toFixed(2);

}

</script>