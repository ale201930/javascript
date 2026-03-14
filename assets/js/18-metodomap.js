const carrito = [
    { nombre: `monitor 20 pulgadas`, precio: 500},
    { nombre: `television 50 pulgadas`, precio: 700},
    { nombre: `tablet`, precio: 800},
    { nombre: `audifinos`, precio: 500},
    { nombre: `teclado`, precio: 150},
    { nombre: `celular`, precio: 750},
]

/* const nuevoarray2 = carrito.foreach (function(producto){
    return `articulo ;${producto.nombre} - precio: ${producto.precio}`;
}) */

    carrito.forEach((producto) => console.log(`articulo: ${producto.nombre} precio: ${producto.precio}`));

    const fruteria = [
    { nombre: `mango`, precio: 500},
    { nombre: `fresa`, precio: 150},
    { nombre: `cambur`, precio: 750},
    ]

    fruteria.forEach((fruta) => console.log(`fruta: ${fruta.nombre} precio: ${fruta.precio}`));
    


    const motos = [
        { nombre: `rk250`, precio: 2100 , modelo:`neiker` },
        { nombre: `txgs250`, precio: 2600 , modelo:`doble proposito` },
        { nombre: `kavak150`, precio: 1600 , modelo:`enduro` },
]
    motos.forEach((marca) => console.log(`marca: ${marca.nombre} precio: ${marca.precio} modelo: ${marca.modelo}`));


    const nuevoArray = carrito.map(function(producto){
        return `articulo: ${producto.nombre} precio: ${producto.precio * 2}`;
    })
    console.log(nuevoArray);