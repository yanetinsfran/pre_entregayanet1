console.log("Bienvenidos a la escuela tecnica N°8, Bernal")
alert("Bienvenidos a la escuela tecnica N°8, Bernal")
let numero

do{
   numero = parseInt(prompt("Ingresar el Número de su dni"));
   console.log(numero);
} while(isNaN(numero))

let nombreyapellido = prompt("Ingresar su nombre y apellido");

while(nombreyapellido != "ESC" ){
    alert("El usuario ingresó "+ nombreyapellido);

    nombreyapellido = prompt("Ingresar ESC una vez que finalizo");
}

let ciclo = prompt("ingrese el su curso, superior o basico") 
   
if (ciclo === "superior"){
    console.log("usd cursa a la mañana")
} else if (ciclo ===""){
    console.log("por favor ingrese su ciclo, superio o basico")
} else if (ciclo ==="basico"){
    console.log("usted esta tarde ")
}



let entrada = prompt("Ingresar un nombre de materia: MATEMATICAS o LENGUA").toUpperCase();

while(entrada != "ESC"){
   switch (entrada) {
       case "MATEMATICAS":
            alert("matematicas:21/9/2023");
            break;
        case "LENGUA":
            alert("Lengua:28/09/2023");
            break;
       default:
           alert("¿Que materia quieres saber la fecha de examan?")
           break;
   }
   entrada = prompt("Ingresar un nombre de la materia")
}



// parseos del prompt
// ParseInt => numeros enteros
// ParseFloat => numeros con decimal
// Number => abarca ambos parseos

// atajos de teclado
// ctrl alt flecha para abajo o para arriba => selecciona varios renglones
// toLowerCase() => pasa todo a minúscula
// toUpperCase() => pasa todo a mayúscula 
// ctrl }    o     ctl k c => esto es para comentar 