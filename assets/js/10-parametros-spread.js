function listadoFrutas(fruta1, fruta2, ...todasfrutas) {
    console.log("la fruta 1 es", fruta1);
    console.log("la fruta 2 es", fruta2);
    console.log(todasfrutas);
}
// parametros rest
listadoFrutas("fresa", "cambur", "patilla", "durazno");

var frutas2 = ["mango", "uvas", "kiwi"]; //array
// parametros spread // convierto un arreglo en un parametro
listadoFrutas(...frutas2, "fresa", "cambur", "patilla");
