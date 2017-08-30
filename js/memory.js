$(document).ready(function(){

  arrayRandom();

});


var tablero = $('#tablero');

var gatitos = ['cat/1.png', 'cat/2.png', 'cat/3.png', 'cat/4.png', 'cat/5.png', 'cat/6.png' ];

var arrayCats = [];

var tabla = document.createElement('table');
for (var i = 0; i < 3; i++) {
  var fila = document.createElement('tr');
  for (var j = 0; j < 4; j++) {
    var celda = document.createElement('td');
    fila.appendChild(celda);
    arrayCats.push(celda);
  }
  tabla.appendChild(fila);
}
tablero.append(tabla);

var cats = gatitos.length;

//ARRAY CON LAS POSICIONES
var arrayPositiones=[];
for ( var i = 0 ; i<cats; i++) {
    arrayPositiones.push(i);
    arrayPositiones.push(i);
}

function arrayRandom () {
  arrayPositiones = arrayPositiones.sort(function() {
    return Math.random() - 0.5
  });

  for ( var i = 0 ; i<cats*2; i++) {
    var divGatito = document.createElement('div');
        divGatito.setAttribute('class','div-gatito');
        divGatito.setAttribute('class','gatito-'+arrayPositiones[i]);
        divGatito.setAttribute('id','kity'+i);
    var gatito = document.createElement('img');
        gatito.src = 'imagenes/'+gatitos[arrayPositiones[i]];
    var divOcultaGatito = document.createElement('div');
        divOcultaGatito.setAttribute('class','div-oculta-gatito muestra');
        divOcultaGatito.setAttribute('onclick','mostrar(this)');
    divGatito.appendChild(gatito);
    divGatito.appendChild(divOcultaGatito);
    arrayCats[i].appendChild(divGatito);
  }
}



var seleccionado = [];  //LOS ELEMENTOS SELECCIONADOS
var click = 0; //CONTADOR DE CLICKS ACEPTADOS

var arrayMuestra = document.getElementsByClassName('oculta');

function mostrar(e){
  //SI LA CLASE NO ES MUESTRA (div) ENTONCES NO HACE NADA//
  if ( e.getAttribute('class')=="div-oculta-gatito muestra" && (click==0 || click==1)){
    seleccionado.push(e);
    e.classList.remove('muestra');
    e.classList.add('oculta');
    click++
  }

  setTimeout(voltear,1500);
  
  //FUNCION VOLTEAR//
  function voltear(){
    if((click) == 2){
      click=0;
      if ( seleccionado[0].parentNode.getAttribute('class') == seleccionado[1].parentNode.getAttribute('class')){
        console.log('iguales');
      } else{
        seleccionado[0].classList.remove('oculta');
        seleccionado[0].classList.add('muestra');
        seleccionado[1].classList.remove('oculta');
        seleccionado[1].classList.add('muestra');
      }
      seleccionado.splice(0, 2);
    }
  }


  console.log(click)
  console.log(seleccionado);

  //AL GANAR SOLO APARECE UNA IMAGEN//
  if(arrayMuestra.length == 12){
    var divGanaste = document.createElement('div');
        divGanaste.setAttribute('class','div-ganaste');
    var gatitoGanaste = document.createElement('img');
        gatitoGanaste.src = 'imagenes/winner.gif';
    divGanaste.appendChild(gatitoGanaste);
    tablero.append(divGanaste);
  }

}