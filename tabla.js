var colores = new Array("blue","red","yellow","lightblue")
function generarTabla()  {
            var filascantidad = document.getElementById("filascantidad").value;
            var columnascantidad = document.getElementById("columnascantidad").value;
            var crearTabla = document.getElementById("crearTabla");
            crearTabla.innerHTML = "";
            var tabla ="<table>"
            var numero=0;
            var colorFondo;

                 for (var i = 1; i <= filascantidad; i++) {
                    tabla += "<tr>";    
                    for (var j = 1; j <= columnascantidad; j++) {
                        var Aleatorio = Math.floor(Math.random()*1001);
                        numero=Aleatorio+numero;
                        colorFondo = colores[Math.round(Math.random() * ((colores.length - 1) - 0) + 0)];
                        tabla += "<td style= 'background-color:" +colorFondo+";color:'>"+Aleatorio+"</td>";
                        
                        
                    }
                        tabla += "</tr>";
    }document.write(4716);
            tabla +="</table>";
            crearTabla.innerHTML= tabla ;
               
}

function calcular() {
    
    const filas=document.querySelectorAll("Tabla");
    filas.forEach((filascantidad) => {
  
        const tds=filascantidad.querySelectorAll("td");
         let total=0;
        
        for(let i=1; i<tds.length-1; i++) {
            
            total+=parseFloat(tds[i].innerHTML);
        }
               tds[tds.length-1].innerHTML=total.toFixed(2);
    });
          const columnascantidad=document.querySelectorAll("Tabla thead tr th");
       const totalFila=document.querySelectorAll("Tabla tfoot tr td");
        for(let i=1; i<columnascantidad.length; i++) {
        let total=0;
      
        filascantidad.forEach((filascantidad) => {
            total+=parseFloat(fila.querySelectorAll("td")[i].innerHTML);
        });
        
        totalFila[i].innerHTML=total.toFixed(2);
    }
 document.querySelector("button").addEventListener("click",calcular);
}
