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

var ciudad = "ortiz";
switch (true){
    case ciudad== "caracas":
    console.log("soy de caracas");
    break; //palabra reservada para romper el switch

    case ciudad== "brasilia":
    console.log("soy de brasilia");
    break;
    case cuidad== "madrid":
    console.log("soy de madrid");
    break;
    case cuidad== ciudad:
    console.log("jjjjj");
    break;
}

// en caso sea de caracas diga soy caraque; o en caso sea madri soy madrice;