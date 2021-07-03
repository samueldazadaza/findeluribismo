var elecciones = moment('2025-05-28');
var hoy=moment();

var anios=elecciones.diff(hoy, "years");
var days=elecciones.diff(hoy, "days");
var hours=elecciones.diff(hoy, "hours");

function escribir(){
    document.getElementById('anios').innerHTML=anios 
}escribir();

function escribir4(){
    if (days > 30) {
        days = days / 30
    };
    document.getElementById('days').innerHTML= days 
}escribir4();

function escribir2(){
    if (days > 365) {
        days = days - 365
    };
    document.getElementById('days').innerHTML= days 
}escribir2();

function escribir3(){
    document.getElementById('hours').innerHTML=hours 
}escribir3();


    console.log(elecciones)
    console.log(anios)
    console.log(days)
    console.log(hours)




