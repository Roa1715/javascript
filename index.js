//elemetos
const Producto= document.getElementById("inptproduct");
const Cantidad= document.getElementById("inpcant");
const Precio= document.getElementById("inptprecio");
const Agregar= document.getElementById("agregar");
const Tabla= document.getElementById("tbody");
//funciones

function totalProducto(cantidad,precio){
    return precio*cantidad;
};
function crearElemento(nombre,camtidad,precio,total){
    const nuevoElement=document.createElement("tr")
    [nombre,camtidad,precio,total].fila = {


    }
    nuevoElement.innerText = ${nombre} ${camtidad} ${precio} ${total}
    return nuevoElement;
}

Agregar.addEventListener ("click", ()=>{
    const subtotal =totalProducto(Precio.value, Cantidad.value);
    const nuevoElement = crearElemento(Producto.value,Cantidad.value,Precio.value,subtotal);

    Tabla.appendChild(nuevoElement);

    Precio.value=""

})
