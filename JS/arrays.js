//BASE DE DATOS DEL PORTAL DEL EMPLEADO
class Empleado {
    constructor(nombre, apellido, legajo, antiguedad, sindicato, sueldoBruto){
        this.nombre = nombre;
        this.apellido = apellido;
        this.legajo = legajo;
        this.antiguedad = Number(antiguedad);
        this.sindicato = sindicato;
        this.sueldoBruto = Number(sueldoBruto);
    }
}

const arrayEmpleados = [];

const empleado1 = new Empleado('Noelia', 'Albornoz', 00124, 5, 'no', 233000);
const empleado2 = new Empleado('Roberto', 'Perez', 00125, 7, 'no', 300000);
const empleado3 = new Empleado('Anabela', 'Martinez', 00030, 25, 'si', 400000);
const empleado4 = new Empleado('Matias', 'Gomez', 00017, 12,'si', 350000);


arrayEmpleados.push(empleado1, empleado2, empleado3, empleado4);
console.log(arrayEmpleados);

// // //CREO UN NUEVO ARRAY DE ANTIGUEDAD POR EMPLEADO
// // // const antiguedadPorEmpleado = [];
// // // antiguedadPorEmpleado.push(empleado1.antiguedad, empleado2.antiguedad, empleado3.antiguedad, empleado4.antiguedad);
// // // console.log(antiguedadPorEmpleado);
//CREO UN ARRAY DONDE LOS DATOS DEL EMPLEADO COINCIDAN CON EL APELLIDO INGRESADO

let empleadoApellido = prompt('Ingrese su apellido');

const empleadoDatos = arrayEmpleados.find(dato => dato.apellido === empleadoApellido);

console.log(empleadoDatos);

if (empleadoDatos){
    const mostrasListaEmpleados = () => {
        const arrayLista = [];
        arrayEmpleados.forEach (empleado => arrayLista.push(`Nombre: ${empleado.nombre}, Apellido: ${empleado.apellido}, Legajo: ${empleado.legajo}, Años de antiguedad: ${empleado.antiguedad}`));
        alert('Lista de empleados vigentes: '+ '\n'+arrayLista.join('\n'));
    }
    mostrasListaEmpleados();
}else {
    alert('No existe empleado con ese apellido')
}




//ACÁ VOY A ORDENAR A LOS EMPLEADOS SEGÚN AÑOS DE ANTIGUEDAD DEL MÁS VIEJO AL MÁS NUEVO:
const ordenarViejoNuevo = ()=> {
    arrayEmpleados.sort((a , b) => b.antiguedad - a.antiguedad);
    console.log(arrayEmpleados);

}
ordenarViejoNuevo();




//PARA QUE EL EMPLEADO PUEDA SABER SUS DIAS DE VACACIONES SEGÚN SU ANTIGUEDAD
const diasVacaciones = () => {
    const arrayAntiguedad = [];
    arrayEmpleados.forEach (persona => arrayAntiguedad.push(persona.antiguedad));
    (confirm('Qusiera saber cuántos días de vacaiones le correponden?'));
    let añosTrabajados = arrayAntiguedad;
    añosTrabajados = Number.isNaN(prompt('ingrese sus años de antiguedad'))
    if (añosTrabajados <= 5){
                    alert('le corresponden 14 días de vacaciones')
                } else if (añosTrabajados > 5){
                    alert('le corresponden 21 días de vacaciones')
                }else if (añosTrabajados >= 10){
                    alert('le corresponden 28 dias de vacaciones')
                }else if (añosTrabajados >= 20){
                    alert('le corresponden 35 dias de vacaciones');
                }else{
                    alert('Ud ya se retiró')
                }
}
diasVacaciones();



//EMPLEADOS QUE FORMAN PARTE DEL SINDICATO
const empleadosSindicato = arrayEmpleados.filter((el) => el.sindicato === 'si');
console.log(empleadosSindicato);
confirm('Quiere saber cúanto le descuentan del sindicato?');
//ACÁ LES MUESTRA CUÁNTO LE DESCUENTA EL SINDICATO 
const descuentoSindicato = empleadosSindicato.map((person) => {
return {
    nombre: person.nombre,
    apellido: person.apellido,
    sueldoBruto: person.sueldoBruto * 2 / 100
    }

})
console.log(descuentoSindicato);














// // console.log(arrayEmpleados.includes(prompt('ingrese nombre')));
// // let empleadoIngresado = '';
// // do {
// // empleadoIngresado = prompt('Ingrese su nombre');
// // }
// // while(arrayEmpleados.includes(empleadoIngresado));

// // console.log("la empleada "+ (empleado1.nombre) + " " + (empleado1.apellido) + " renunció al día de la fecha");
// // arrayEmpleados.shift();
// // console.log(arrayEmpleados);

// // const ListaEmpleados = arrayEmpleados.join("\n")
// // console.log(ListaEmpleados);













// console.log(Date());






// // // class DescuentosEmpleado {
// // //     constructor(sueldoBruto, obraSocial, jubilacion, leyObligatoria, sueldoNeto){
// // //         this.sueldoBruto = sueldoBruto;
// // //         this.obraSocial = obraSocial;
// // //         this.jubilacion = jubilacion;
// // //         this.leyDiezYnueveCeroTreintaYdos = leyObligatoria;
// // //         this.sindicato = sindicato;
// // //         this.sueldoNeto = sueldoNeto;
// // //     }
// // // }



// // const arrayDatos = [];

// // const empleado1 = new DescuentosEmpleado(233000, 6990, 25630, 6990, 193390);
// // const empleado2 = new DescuentosEmpleado(300000, 9000, 33000, 9000, 249000);
// // const empleado3 = new DescuentosEmpleado(350000, 10500, 38500, 10500, 290500);
// // const empleado4 = new DescuentosEmpleado(400000, 12000, 44000, 12000, 332000);

// // const antiguedadPorEmpleado = [];
