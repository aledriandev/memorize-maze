var tablero = document.getElementById('tablero');

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
tablero.appendChild(tabla);

var cats = gatitos.length;

//ARRAY CON LAS POSICIONES
var arrayPositiones=[];
for ( var i = 0 ; i<cats; i++) {
    arrayPositiones.push(i);
    arrayPositiones.push(i);
}

var divOcultaGatito;

function arrayRandom (Ngatos) {
  arrayPositiones = arrayPositiones.sort(function() {
    return Math.random() - 0.5
  });

  for ( var i = 0 ; i<cats*2; i++) {
    var divGatito = document.createElement('div');
        divGatito.setAttribute('class','div-gatito');
        divGatito.setAttribute('class','gatito-'+arrayPositiones[i]);
    var gatito = document.createElement('img');
        gatito.src = 'imagenes/'+gatitos[arrayPositiones[i]];
        divOcultaGatito = document.createElement('div');
        divOcultaGatito.setAttribute('class','div-oculta-gatito muestra');
        divOcultaGatito.setAttribute('onclick','mostrar(this)');
    divGatito.appendChild(gatito);
    divGatito.appendChild(divOcultaGatito);
    arrayCats[i].appendChild(divGatito);
  }
}

var seleccionado = [];
var click = 0;
function mostrar(e){
  seleccionado.push(e);
  e.classList.remove('muestra');
  e.classList.add('oculta');

  //e.parentNode.removeChild(e);
  if(click==2){
    click=0;
    if (seleccionado[0].parentNode.getAttribute('class') == seleccionado[1].parentNode.getAttribute('class')){
      console.log('hoil');
    } else{
      seleccionado[0].classList.remove('oculta');
      seleccionado[0].classList.add('muestra');
      seleccionado[1].classList.remove('oculta');
      seleccionado[1].classList.add('muestra');
    }
    seleccionado.splice(0, 2);
  }
  click++;
  console.log(click)
  console.log(seleccionado);
}

arrayRandom();