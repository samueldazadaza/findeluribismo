const elecciones = moment('2022-05-29'); //variable fija de fecha elecciones 2022

function insert_html(){
    var hoy=moment(); //variable fecha y hora, ahora mismo

    var years=elecciones.diff(hoy, "years");
    document.getElementById('years').innerHTML=years //insertar datos en el HTML

    var months=elecciones.diff(hoy, "months"); 
    document.getElementById('months').innerHTML=months //insertar datos en el HTML

    var days=elecciones.diff(hoy, "days");
    document.getElementById('days').innerHTML=days //insertar datos en el HTML

    var hours=elecciones.diff(hoy, "hours");
    document.getElementById('hours').innerHTML=hours //insertar datos en el HTML

    var minutes=elecciones.diff(hoy, "minutes");
    document.getElementById('minutes').innerHTML=minutes //insertar datos en el HTML

    var seconds=elecciones.diff(hoy, "seconds");
    document.getElementById('seconds').innerHTML=seconds //insertar datos en el HTML
}
setInterval(insert_html, 1000); //tiempo para actualizar la informacion en milisegundos
