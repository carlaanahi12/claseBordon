import { empleados } from "./empleados.js";


const formularioIngreso = document.getElementById('form');

const inputEmail = document.getElementById('email');
const inputContrasenia = document.getElementById('contraseña');

// const botonIngresar = document.getElementById('primerClick');


const apellido = document.getElementsByClassName('apellido');
const legajo = document.getElementsByClassName('legajo');
const sueldoBruto = document.getElementsByClassName('sueldoBruto');
const antiguedad = document.getElementsByClassName('antiguedad');






// empleados.forEach((empleado) => {

// })





//ALMACENO EL ARRAY DE OBJETOS EN LOCAL STORAGE
//Lo convierto a json
const enJSON = JSON.stringify(empleados);

//Guardo el array de objetos en formato json
localStorage.setItem("empleados", enJSON);
// console.log(enJSON);


//Obtengo el valor del array almacenado en el storage
const listaEmpleados = JSON.parse(localStorage.getItem('empleados'));
// console.log(listaEmpleados);




// botonIngresar.addEventListener('click', clickIngreso);

// function clickIngreso(){
//     listaEmpleados.forEach((empleado)=> {
//         if ((inputEmail === empleado.email.value) && (inputContrasenia === empleado.contrasenia.value)){

//             mostrarDatosEmpleado();
//             }

//         })

// }






//EVENTO SUBMIT

formularioIngreso.addEventListener('submit', (event)=> {
event.preventDefault();
    listaEmpleados.forEach((empleado)=> {
        if ((inputEmail.value === empleado.email) && (inputContrasenia.value === empleado.contrasenia)){

            mostrarDatosEmpleado();
            }

        })




})



const mostrarDatosEmpleado = () => {
    apellido.innerText = apellido.value;
    legajo.innerText = legajo.value;
    sueldoBruto.innerText = sueldoBruto.value;
    antiguedad.innerText = antiguedad.value;



}
















// let sueldoBruto = '';
// let sueldoNeto = '';

// //LLAMO A LOS ELEMENTOS QUE VOY A UTILIZAR MEDIANTE DOM
// const input = document.getElementById('button');
// const botonCalcular = document.getElementById('CLICK');
// const resultado = document.getElementById("resultado");


// //EVENTO INPUT
// input.addEventListener('input', () => {
//    sueldoBruto = (input.value);
//    console.log(sueldoBruto);
// });



// //EVENTO CLICK 
// botonCalcular.addEventListener('click', respuestaClick);

// function respuestaClick (){
//     let obraSocial = 3;
//     let jubilacion = 11;
//     let leyObligatoria = 3;

//     function calcular(){
//         return sueldoBruto * obraSocial / 100;

//     }
//     let descObraSocial = calcular(sueldoBruto, obraSocial);
//     // console.log(descObraSocial);

//     function calcjubilacion(){
//         return sueldoBruto * jubilacion / 100;
//     }
//     let descJubilacion = calcjubilacion(sueldoBruto, jubilacion);
//     // console.log(descJubilacion);

//     function calcley (){
//         return sueldoBruto * leyObligatoria / 100;
//     }
//     let descLey = calcley(sueldoBruto, leyObligatoria);
//     // console.log(descLey);

//     sueldoNeto = sueldoBruto - descObraSocial - descJubilacion - descLey;

// console.log(sueldoNeto);

// actualizar();

// }




// const actualizar = () => {
//     resultado.innerHTML = `Tu sueldo neto es: $${sueldoNeto}`;

// }

