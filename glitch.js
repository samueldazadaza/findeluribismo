var duquedate = new Date("February 1, 2019 15:20:00");
var madurodate = new Date("April 19, 2013 00:00:00");
var one_hour = 1000 * 60 * 60;
var one_day = 1000 * 60 * 60 * 24;

function updateHour() {
  var currentdate = new Date(); 
  var horas_desde_duque = ((currentdate - duquedate)/one_hour).toFixed(4);
  var dias_maduro = ((currentdate - madurodate)/one_day).toFixed(4);
  var delta = Math.abs(currentdate - duquedate) / 1000;

  var hours = Math.floor(delta / 3600);
  delta -= hours * 3600;

  var minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  var seconds = delta % 60;
  
  $("span.hours").text(horas_desde_duque.replace('.',','));
  $("span.horas").text(hours);
  $("span.minutos").text(minutes);
  $("span.segundos").text(Math.floor(seconds));
  $("span.maduro").text(Math.floor(dias_maduro));
}

setInterval(updateHour, 1000);