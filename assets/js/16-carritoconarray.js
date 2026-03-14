// supongamos que creamos un carrito de compras desde la consola, mas adelante lo haremos ya desde una interfaz web.


const carrito = [];
// añadir un elemento al carrito...

const producto = {
    nombre: `monitor 20 pulgadas`,
    precio: 500
}

const producto2 = {
    nombre: `celular`,
    precio: 500
}

const producto5 = {
    nombre: `iphone`,
    precio: 600
}

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto5);


// añadir al inicio del carrito...

const producto3 = {
    nombre: `teclado`,
    precio: 50
};
carrito.unshift(producto3);

console.log(carrito);