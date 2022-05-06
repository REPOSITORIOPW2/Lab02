function DiasFaltantes(){
    var fecha = new Date(2022, 07, 15);
    var hoy = new Date();
    var restante = fecha - hoy;
    return "Faltan : " + parseInt((restante/86400000)+1) + " días";
}