var compras = prompt (`deseas comprar`, `si`);
const catalago= [
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