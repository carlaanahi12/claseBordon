let entrada =  Number(prompt("Ingrese un numero para otorgarle un turno del 1 al 4"));
let ingresados = '';
while (entrada != "ESC" ) {
    switch (entrada) {
        case 1:
            alert("Su turno es el primero");
            break;
        case 2:
            alert("su turno es el segundo");
            break;
        case 3:
            alert("su turno es el tercero");
            break;
        case 4:
            alert("su turno es el cuarto");
            break;
        default:
            alert("Ya no hay más turnos");
            break;
    }
    entrada = Number(prompt("Ingrese un numero para otorgarle un turno del 1 al 4"));
}

