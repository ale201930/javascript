var date = 1979;
switch (true) {
    case date== 1980:
    console.log("son milenials");
    break; //palabra reservada para romper el switch

    case date >=2000 && date <= 2014:
        console.log("yo soy generacion z");
        break;
    case date <= 1980:
        console.log("yo soy generacion x");
        break;
}

var ciudad = "caracas";

switch (true){
    case ciudad == "caracas":
        console.log("soy de caracas");
        break; //palabra reservada para romper el switch

    case ciudad == "brasilia":
        console.log("soy de brasilia");
        break;

    case ciudad == "madrid":
        console.log("soy de madrid");
        break;

    default:
        console.log("ciudad no reconocida");
}

// en caso sea de caracas diga soy caraque; o en caso sea madri soy madrice;

var usuario = "alex";
var password = "123";
var rol = "administrador";

switch (true) {

    case usuario === "" &&  password === "" &&  rol === "":
        console.log("Debe ingresar usuario, contraseña y validar rol");
        break; //palabra reservada para romper el switch

    case usuario !== "alex" &&  password !== "1234" && rol === "administrador":
        console.log(" Bienvenido administrador, acceso total del sistema");
        break;

    case usuario !== "alex" &&  password !== "123" && rol === "inspector":
        console.log(" Bienvenido inspector, puedes ingresar la asistencia ");
        break;
    
    case usuario !== "alex" &&  password !== "12" && rol === "recursos humanos":
        console.log(" Bienvenido recuros humanos, puede ingresar el registro del personal ");
        break;

    default:
        console.log("Rol no válido, datos incorrectos");
}