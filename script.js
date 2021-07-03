//conversiones:
var unahora = 1000 * 60 * 60 * 24; //milisegundos x segundos x minutos x hora

//obtener hora actual desde equipo:
var date = new Date();

//
var dia = date.getDate();
var mes = date.getMonth() + 1;
var año = date.getFullYear();

//variable fija de fecha elecciones 2022
var fechaelecciones = new Date("May 29, 2022 00:00:00")

var faltanhoras = ((fechaelecciones - date)/ unahora)


//pruebas por consola
console.log(dia); //dia de hoy
console.log(mes); // mes de hoy
console.log(año); // año de hoy
console.log(`faltan ${faltanhoras}.text para las elecciones 2022`);

