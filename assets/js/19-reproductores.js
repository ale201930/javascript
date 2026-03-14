const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    mostrar: function( nombre) {
        console.log(`la cancion se llama  ${nombre}`);
    },
     pausar: function(id) {
        console.log(`Pausando... canción con el id ${id}`);
    },
     borrar: function(id) {
        console.log(`Borrando canción con id ${id}`);
    },
     crearPlaylist: function( nombre) {
        console.log(`Creando la playlist  ${nombre}`);
    },
    reproducirPlaylist: function( nombre) {
        console.log(`Reproduciendo la playlist  ${nombre}`);
    },
}

reproductor.borrar(15);
reproductor.mostrar("Enter Sandman");
reproductor.crearPlaylist( "rock and roll");
reproductor.reproducirPlaylist( "rock and roll");



const carro = {
    MeterLaLLave: function(id) {
        console.log(`Meter la llave al carro id ${id}`);
    },
    prenderCarro: function( especificaciones) {
        console.log(`Prendiendo el carro, placa numero  ${especificaciones}`);
    },
    Prendio: function(id) {
        console.log(`El carro está prendido, id ${id}`);
    },
     meterVelocidad: function(id) {
        console.log(`Meter la velocidad al carro id ${id}`);
    },
    Apago: function(id) {
        console.log(`Apagando el carro id ${id}`);
    },
    SacasteLLave: function( nombre) {
        console.log(`Sacando la llave del carro  ${nombre}`);
    },
   
}

carro.MeterLaLLave(1);
carro.prenderCarro("22655647");
carro.Prendio(1);
carro.meterVelocidad(2);
carro.Apago(1);
carro.SacasteLLave("aveo");