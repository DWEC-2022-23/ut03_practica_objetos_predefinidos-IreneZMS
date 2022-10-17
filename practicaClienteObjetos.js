
botonReyesMagos = document.getElementById("botonReyesMagos").addEventListener("click", reyesMagos);
botonFechaActual = document.getElementById("botonDayNow").addEventListener("click", fechaActual);
botonAreaCirculo = document.getElementById("botonAreaCirculo").addEventListener("click", calcularAreaCirculo);
botonAleatorio = document.getElementById("botonAleatorio").addEventListener("click", calcularAleatorio);
botonCadenas = document.getElementById("botonCadenas1").addEventListener("click", mitadCar);
botonCadenas = document.getElementById("botonCadenas2").addEventListener("click", ultimoCaracter);
botonCadenas = document.getElementById("botonCadenas3").addEventListener("click", cadenaInversa);
botonCadenas = document.getElementById("botonCadenas4").addEventListener("click", cadenaGuiones);
botonCadenas = document.getElementById("botonCadenas5").addEventListener("click", contarVocales);


function reyesMagos(fecha) {
    //No he sido capaz de sacarlo con cualquier fecha. 
    fecha = document.getElementById("fechaReyes").value;
    fecha = new Date(fecha);
    const DIAREYESMAGOS = new Date("2023-01-06");
    let milisegundosDia = 24 * 60 * 60 * 1000;
    let milisegundosTranscurridos = Math.abs(DIAREYESMAGOS.getTime() - fecha.getTime());
    let diasQueFaltan = Math.round(milisegundosTranscurridos/milisegundosDia);
    alert(diasQueFaltan);
}

function fechaActual() {
    //Hoy es martes, 22 de septiembre de 2020 y son las 12:34 horas
    let fecha = new Date();
    const NOMBRE_DIASEM = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    let nombreDiaSemana = NOMBRE_DIASEM[fecha.getDay()];
    let diaDelMes = fecha.getDate();
    const MESES = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let nombreMes = MESES[fecha.getMonth()];
    let anio = fecha.getFullYear();
    let hora = fecha.getHours();
    let minuto = fecha.getMinutes();
    if (hora < 10) {
        hora = "0" + hora;
    }
    if (minuto < 10) {
        minuto = "0" + minuto;
    }
    alert("Hoy es " + nombreDiaSemana + ", " + diaDelMes + " de " + nombreMes + " de " + anio + " y son las " + hora + ":" + minuto + " horas");
}
function calcularAreaCirculo(radio) {
    radio = document.getElementById("radio").value;
    let area = Math.PI * radio * radio;
    let longitudCircunferencia = 2 * Math.PI * radio;
    longitudCircunferencia = longitudCircunferencia.toFixed(2);
    area = area.toFixed(2);
    alert("El area del circulo es de :" + area + " y la longitud de :" + longitudCircunferencia);

}

function calcularAleatorio(comienzo, fin) {
    comienzo = document.getElementById("aleatorio1").value;
    fin = document.getElementById("aleatorio2").value;
    //comienzo = parseInt(comienzo);
    let resultado1 = Math.random() * (comienzo - fin) + fin;
    let resultado2 = Math.random() * (fin - comienzo) + comienzo;

    if (comienzo === fin) {
        alert("Los numeros deben de ser distintos");
    } else if (comienzo > fin) {
        alert(Math.floor(resultado1));

    } else {
        alert(Math.floor(resultado2));
    }
}
function mitadCar(cadena) {
    cadena = document.getElementById("leerCadena").value;
    let cadenaDividida = Math.floor(cadena.length/2);
    cadena = cadena.split('');
    mitad = "";
    for (let i = 0; i < cadenaDividida; i++) {
        mitad += cadena[i];
    }

    alert(mitad);

}
function ultimoCaracter(cadena) {
    cadena = document.getElementById("leerCadena").value;
        alert(cadena.charAt(cadena.length - 1));

}
function cadenaInversa(cadena) {
    cadena = document.getElementById("leerCadena").value;
    cadena = cadena.split('');
    cadena = cadena.reverse();
    cadena = cadena.toString();
    cadena = cadena.replace(/,/g, '');
    alert(cadena);
}
function cadenaGuiones(cadena) {
    cadena = document.getElementById("leerCadena").value;
    cadena = cadena.split('');
    cadena = cadena.toString();
    cadena = cadena.replace(/,/g, '-');
    alert(cadena);
}
function contarVocales(cadena) {
    cadena = document.getElementById("leerCadena").value;
    let numeroVocales = cadena.match(/[aeiou]/gi).length;
    alert(numeroVocales);
    //Aprendo las expresiones regulares en FreeCodeCamp y prefiero realizarlo de este modo. Dejo comentado el for que había usado en un inicio. 
    /*let cad = cadena.split('');
    let contador = 0;
    for (let i = 0; i < cad.length; i++) {
        if (cad[i] === "a" || cad[i] === "e" || cad[i] === "i" || cad[i] === "o" || cad[i] === "u")
        {
            contador++;
        }
    }*/
    
}
