const Jugadores = [
    {Nombre: 'adrian', Puntaje: 3000},
    {Nombre: 'jose', Puntaje: 300},
    {Nombre: 'zoraida', Puntaje: 100},
    {Nombre: 'brando', Puntaje: 600}
];

Jugadores.forEach((Jugador) => 
    console.log(`Jugador: ${Jugador.Nombre} Puntaje: ${Jugador.Puntaje}`)
);

const NuevoPuntaje = Jugadores.map(function(Jugador){
    return `Jugador: ${Jugador.Nombre}, Nuevo Puntaje: ${Jugador.Puntaje * 2}`;
});

console.log(NuevoPuntaje);