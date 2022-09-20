//BASE DE DATOS DEL PORTAL DEL EMPLEADO 


class Empleado {
    constructor(nombre, apellido, legajo, antiguedad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.legajo = legajo;
        this.antiguedad = Number(antiguedad);
    }
    identificarse() {
        this.nombre = prompt("ingrese su nombre");
        this.apellido = prompt("ingrese su apelllido");
        console.log(`Bienvenido/a` + this.nombre + this.apellido + `a su portal`);

    }

}



const arrayEmpleados = [];

const empleado1 = new Empleado('Noelia', 'Albornoz', 00124, 5);
const empleado2 = new Empleado('Roberto', 'Perez', 00125, 5);
const empleado3 = new Empleado('Anabela', 'Martinez', 00030, 2);
const empleado4 = new Empleado('Matias', 'Gomez', 00017, 1);


arrayEmpleados.push(empleado1, empleado2, empleado3, empleado4);
console.log(arrayEmpleados);

// console.log(arrayEmpleados.includes(prompt('ingrese nombre')));

// let empleadoIngresado = '';


// do {
// empleadoIngresado = prompt('Ingrese su nombre');
// }
// while(arrayEmpleados.includes(empleadoIngresado));

console.log("la empleada "+ (empleado1.nombre) + " " + (empleado1.apellido) + " renunció al día de la fecha");
arrayEmpleados.shift();
console.log(arrayEmpleados);

const ListaEmpleados = arrayEmpleados.join("\n")
console.log(ListaEmpleados);













// console.log(Date());