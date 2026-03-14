var compras = prompt (`deseas comprar`, `si`);
const catalago= [  // array de objetos
    {id: 1, producto: "pera", valor: 150},
    {id: 2, producto: "mango", valor: 250},
    {id: 3, producto: "lechoza", valor: 350},
]
if (compras=="si"){
    mostrarcatalogo(catalago);
} else{
    console.log(`no quiero comprar`);
}
function mostrarcatalogo(catalago) {
    // console.log(catalago);
    for (let i = 0; i < catalago.length; i++) {
        console.log(catalago[i]); 
    }
}
var compras2 =prompt(
    "ingrese un id del producto a comprar entre: 0,1 y 2",
    0,
);
console.log(`haz agregado al carrito el producto con el id ${compras2}`);





//otro

var total = 0;
function agregarcarrito(precio) {
    return (impuesto = total+= precio); 
}
function calcularimpuesto(total) {
    return (impuesto = total * 1.16); // cada ves
}
total = agregarcarrito(300);
agregarcarrito(600);
agregarcarrito(1200);
impuesto = calcularimpuesto(total);

console.log(`el total de tu compra es ${total} y con impuestos es ${impuesto}`);
// document.write(`el total a pagar es ${total} y el total mas el impuesto es ${impuesto}`);
