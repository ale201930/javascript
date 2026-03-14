// array destructuring - al igual que los objetos algunas veces quieres crear la variabley el valor del arreglo, veamos algunos ejemplos:

const numeros = [10, 20, 30, 40, 50];

// [primero, segundo, tercero] = [10,20,30];

//const [primero, segundo, tercero] = numeros;
//console.log(primero);




const x = [1,2,3,4,5];
const [y, z, c] = x;
console.log(y);  //1
console.log(c);  //3

const [primero, segundo, tercero] = numeros;
console.log(numeros);