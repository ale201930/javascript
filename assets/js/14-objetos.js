/*const curso = {
    nombre: "programacion", // llave o propiedad a la cual se le asigna un valor
    duracion:"40 horas", // cada llave de ir separada por coma y el valor asignado con dos puntos
    disponible: true,
    informacion: {
        modulos: 15,
        modalidad:{
            presencial: true,
            online: true 
        }
    }
}

const { nombre, duracion,informacion: {modulos}, informacion, informacion:{modalidad:{presencial}}} =curso;
console.log(modulos);
console.log(informacion);
console.log(presencial);
console.log(nombre);
console.log(duracion); */


/*const telefono = {
    marca: "apple",
    modelo: "iphone 14",
    color: "morado",
    caracteristicas: {
        camara: "108mp",
        bateria: "5000mah",
        pantalla: "6.5pulgadas",
        procesador: "snapdragon 888",
        almacenamiento: "128gb",
        ram : "8gb",
        conectividad: {
            wifi: true,
            bluetooth: true,



        }

    }

}
const { marca, modelo, caracteristicas:{camara, bateria, pantalla, procesador, almacenamiento, ram, conectividad:{wifi, bluetooth}}} = telefono;
console.log(marca);
console.log(modelo);
console.log(camara);
console.log(bateria);
console.log(pantalla);
console.log(procesador);
console.log(almacenamiento);
console.log(ram);
console.log(wifi);
console.log(bluetooth);*/

const medico= {
    nombre: "alvaro",
    apellido: "hernandez",
    edad: 21,
    sexo: "masculino",
    cedula: "30626438",
    especialidad: "ginecologia",
    experiencia: "2 años",
       informacion: {
        hospital: "dr. israel ranuarez balsa",
        ciudad: "san juan de los morros",
        horario: " lunes a miercoles 8am a 4pm",
        pacientespordia: 10,
        precioconsulta: 40,
        contacto: {
            telefono: "04125984615",
            correo: "alvaro@gmail.com",
            modalidad: {
                presencial: true,
            }
        }
    }
}
const { nombre, apellido, edad, sexo, cedula, especialidad, experiencia, informacion:{hospital, ciudad, horario, pacientespordia, precioconsulta, contacto:{telefono, correo, modalidad:{presencial}}}} = medico;
console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(sexo);
console.log(especialidad);
console.log(experiencia);
console.log(hospital);
console.log(ciudad);
console.log(horario);
console.log(pacientespordia);
console.log(precioconsulta);
console.log(telefono);
console.log(correo);
console.log(presencial);

medico.descripcion =` aprende desde cero a programar` // agrego nuevas propiedades a mi objeto
console.log(medico);

delete medico.nombre; // elimino una propiedad del objeto
console.log(medico);
