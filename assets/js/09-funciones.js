"user String";
let suma="";
let resta="";
let multi="";
let divi="";
function porconsola(n1, n2) {
    console.log(" la suma es " + (n1 + n2));
    console.log(" la resta es " + (n1 - n2));
    console.log(" la multiplicacion es " + (n1 * n2));
    console.log(" la division es " + (n1 / n2));
    console.log("****************************** ");
} 
/*function calculadora(n1, n2) {
    console.log(`la suma cal es ${n1 + n2}`);
    console.log(`la resta cal es ${n1 - n2}`);
    console.log(`la multiplicacion cal es ${n1 * n2}`);
    console.log(`la division cal es ${ n1 / n2}`);
    console.log("***********************");

    
}*/
/*calculadora(50, 50);*/                            /*argumento*/
/*porconsola(100, 150); */                          /* invoco a la funcion y le paso los argumentos es decir los valores*/ 


function porpantalla(n1, n2) {
    suma +=" la suma es " + (n1 + n2);
    document.getElementById("suma").innerHTML = suma;

    resta +=" la resta de dos numeros " + (n1 - n2);
    document.getElementById("resta").innerHTML = resta;

    multi +=" la multiplicacion de dos numeros " + (n1 * n2);
    document.getElementById("multi").innerHTML = multi;

    divi +=" la division de dos numeros " + (n1 / n2);
    document.getElementById("divi").innerHTML = divi;
} 
/*porpantalla( 100, 150);*/

function calculadora(n1, n2, mostrar = false) {
    // conjunto de intrucciones que va ejucutar esa funcion

    if (mostrar == false) {
        porconsola(n1, n2);
       } else {
            porpantalla(n1, n2);
       }
       return true;
}
calculadora(5, 10,true);
