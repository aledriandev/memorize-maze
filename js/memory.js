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
        divGatito.setAttribute('id','kity'+i);
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
  if ( e.getAttribute('class')=="div-oculta-gatito muestra"){
  seleccionado.push(e);
  e.classList.remove('muestra');
  e.classList.add('oculta');
  click++
  }
/*PARA no aumentar el click
  - por clases.
    if (seleccionado[0].parentNode.getAttribute('id') == seleccionado[1].parentNode.getAttribute('id')) {
      click--;
      seleccionado.splice(1, seleccionado.length-1);
    }
*/
  if((click) == 3){
    click=1;
    if ( seleccionado[0].parentNode.getAttribute('class') == seleccionado[1].parentNode.getAttribute('class') && 
      seleccionado[0].parentNode.getAttribute('id') != seleccionado[1].parentNode.getAttribute('id')){
      console.log('hoil');
    } else{
      seleccionado[0].classList.remove('oculta');
      seleccionado[0].classList.add('muestra');
      seleccionado[1].classList.remove('oculta');
      seleccionado[1].classList.add('muestra');
    }
    seleccionado.splice(0, 2);
  }
  console.log(click)
  console.log(seleccionado);
  if(arrayMuestra.length == 12){
    alert('ganaste..!');
    // for (var i = 0; i < arrayMuestra.length; i++) {
    //   arrayMuestra[i].classList.add('disable-here');
    // }
  }
}

var arrayMuestra = document.getElementsByClassName('oculta');

arrayRandom();