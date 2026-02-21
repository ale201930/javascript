const ciudad = ["maracay", "caracas", "la guaira", "san juan", "valencia"];

for (let i=0; i<ciudad.length; i++) {
    console.log(ciudad[i]) + "</br>";
}

const telefonos = ["nokia", "blue", "iphone", "motorola", "xiaomi"];
let telefono = "";
for (let i=0; i<telefonos.length; i++) {
    telefono += "la marca mas vendida es " + telefonos [i] + "</br>";
    console.log(telefonos[i]) + "</br>";
}

const estudiantes = ["alexander", "luis", "jesus", "siry", "adrian", "ruben"];
let estudiante = "";
for (let i=0; i<estudiantes.length; i++) {
    estudiante += "estudiantes aprobados son " + estudiantes [i] + "</br>";
    console.log(estudiantes[i]) + "</br>";
}

document.getElementById("estudiantes").innerHTML = estudiante;

let num = 3;
let mult = "";
for (let y = 0; y <= 10; y++) {
    mult +=
    "el resultado de multiplicar" + num + "x" + y + "=" + num * y + "</br>";
    document.getElementById("multi").innerHTML = mult;
    
}