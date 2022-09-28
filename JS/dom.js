const div = document.getElementsByClassName('sueldoIngresado');
console.log(div);


const sueldoBruto = prompt('ingrese sueldo bruto');



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


let resultado = document.getElementById("resultado");
resultado.innerHTML = `su sueldo neto es:  ${sueldoNeto}`;







