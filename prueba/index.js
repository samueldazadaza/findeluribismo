// var years=elecciones.diff(hoy, "years");
// var days=elecciones.diff(hoy, "days");
// var hours=elecciones.diff(hoy, "hours");
// var minutes=elecciones.diff(hoy, "minutes");

// function writeyears(){
//     document.getElementById('years').innerHTML=years
// }writeyears();

// function writedays(){
//     document.getElementById('days').innerHTML=days
// }writedays();

// function writehours(){
//     document.getElementById('hours').innerHTML=hours
// }writehours();

// function writeminutes(){
//     document.getElementById('minutes').innerHTML=minutes
// }writeminutes();

function writeseconds(){
    var elecciones = moment('2022-05-29'); //variable fija de fecha elecciones 2022
    var hoy=moment();
    var seconds=elecciones.diff(hoy, "seconds");
    document.getElementById('seconds').innerHTML=seconds
}
setInterval(writeseconds, 2000); //tiempo para actualizar la informacion en milisegundos

// function calcular() {
//     var seconds = moment().format('MMMM Do YYYY, h:mm:ss a');
//     console.log(seconds);
//     return seconds;
//     document.getElementById('seconds').innerHTML=seconds;
// }