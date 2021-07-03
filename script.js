//conversiones:
var unahora = 1000 * 60 * 60 * 24;

//obtener hora actual desde equipo:
var date = new Date();

var dia = date.getDate();
var mes = date.getMonth() + 1;
var año = date.getFullYear();

var fechaelecciones = new Date("May 25, 2022 15:20:00")

var faltanhoras = ((fechaelecciones - date)/ unahora)



console.log(dia);
console.log(mes);
console.log(año);
console.log(faltanhoras);

