let sueldoBruto = '';
let sueldoNeto = '';

//LLAMO A LOS ELEMENTOS QUE VOY A UTILIZAR MEDIANTE DOM
const input = document.getElementById('button');
const botonCalcular = document.getElementById('CLICK');
const resultado = document.getElementById("resultado");


//EVENTO INPUT
input.addEventListener('input', () => {
   sueldoBruto = (input.value);
   console.log(sueldoBruto);
});



//EVENTO CLICK 
botonCalcular.addEventListener('click', respuestaClick);

function respuestaClick (){
    let obraSocial = 3;
    let jubilacion = 11;
    let leyObligatoria = 3;

    function calcular(){
        return sueldoBruto * obraSocial / 100;

    }
    let descObraSocial = calcular(sueldoBruto, obraSocial);
    // console.log(descObraSocial);

    function calcjubilacion(){
        return sueldoBruto * jubilacion / 100;
    }
    let descJubilacion = calcjubilacion(sueldoBruto, jubilacion);
    // console.log(descJubilacion);

    function calcley (){
        return sueldoBruto * leyObligatoria / 100;
    }
    let descLey = calcley(sueldoBruto, leyObligatoria);
    // console.log(descLey);

    sueldoNeto = sueldoBruto - descObraSocial - descJubilacion - descLey;

console.log(sueldoNeto);

actualizar();

}


// botonCalcular.onkeydown = () =>{
//     respuestaClick();
//     actualizar();

// }


const actualizar = () => {
    resultado.innerHTML = `Tu sueldo neto es: $${sueldoNeto}`;

}

