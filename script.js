//constantes fijas
const unahora = 1000 * 60 * 60; //conversiones= milisegundos x segundos x minutos
const undia = 1000 * 60 * 60 * 24; //conversiones= milisegundos x segundos x minutos x hora
const fechaelecciones = new Date("May 29, 2022 00:00:00") //variable fija de fecha elecciones 2022

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
//variables extraidas del equipo actual
var date = new Date(); //obtener hora actual desde equipo de tipo: Fri Jul 02 2021 21:06:23 GMT-0500 (hora estándar de Colombia):
var dia = date.getDate(); //extraer dia de hoy
var mes = date.getMonth() + 1; // extraer mes de hoy
var año = date.getFullYear(); // extraer año de hoy
var delta = Math.abs(date - fechaelecciones) / 1000;

function calcular() {

    var faltanhoras = ((fechaelecciones - date)/ unahora).toFixed()

    delta = delta - dia * 3600;
    
    //pruebas por consola
    console.log(`faltan ${faltanhoras} para las elecciones 2022`);
    console.log(faltanhoras);

    $("span.dia").text(calcular); //insertar en el html
}
    
//setInterval(calcular2, 2000); //tiempo para actualizar la informacion en milisegundos