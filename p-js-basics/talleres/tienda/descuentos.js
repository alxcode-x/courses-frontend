// const precioOriginal = 100;
// const descuento = 15;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajeConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeConDescuento) / 100;

    return precioConDescuento;
}


function onClickGetPrice(){
    const price = document.getElementById("price").value;
    const discount = document.getElementById("discount").value;

    priceWithDiscount = calcularPrecioConDescuento(price, discount);
    document.getElementById("result").innerText = `The final price is $${priceWithDiscount}`;
}