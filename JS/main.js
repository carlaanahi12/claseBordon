// El simulador interactivo va a ser un portal del empleado donde podrá saber los descuentos que se le aplican a su sueldo,
// a futuro con su dni o codigo del empleado podrá saber vacaciones disponibles, antiguedad, cargo, premios, etc.
function saludar (){
    alert('Bienvenido/a a la calculadora de tu sueldo neto');
    let nombre = prompt("ingrese su nombre");
    while(nombre === ''){
        nombre = prompt("ingrese su nombre");
    }

}

saludar();


let apellido = prompt('ingrese su apellido');
let sueldoBruto = parseInt(prompt('ingrese su sueldo bruto'));
while (isNaN(sueldoBruto)){
    sueldoBruto = parseInt(prompt('ingrese su sueldo bruto'));
}



let obraSocial = 3;
let jubilacion = 11;
let leyObligatoria = 3;

function calcular(){
    return sueldoBruto * obraSocial / 100;

}
let descObraSocial = calcular(sueldoBruto, obraSocial);
console.log(descObraSocial);



function calcjubilacion(){
    return sueldoBruto * jubilacion / 100;
}
let descJubilacion = calcjubilacion(sueldoBruto, jubilacion);
console.log(descJubilacion);

function calcley (){
    return sueldoBruto * leyObligatoria / 100;
}
let descLey = calcley(sueldoBruto, leyObligatoria);
console.log(descLey);

let sueldoNeto = sueldoBruto - descObraSocial - descJubilacion - descLey;
alert(`su sueldo neto es: $ ${sueldoNeto}`);


let sueldoDiario = sueldoNeto / 30;
console.log(sueldoDiario);


let faltas = prompt('¿Usted ha faltado en el mes, en caso afirmativo ingrese cuantas faltas sino ingrese 0 cantidad');


function calcfaltas (faltas){
    if (faltas > 0){
        return (faltas * sueldoDiario).toFixed(2);
    }else {
        alert('Ud cobra el mes completo');
    }

}

let descfaltas = calcfaltas(faltas);
alert(`Lo que se le descuenta a ud es: $ ${descfaltas}`);

let descFaltas = (faltas * sueldoDiario).toFixed(2);
if (faltas !== 0) 
alert (`Lo que se le descuenta a ud es ${descFaltas}`);



