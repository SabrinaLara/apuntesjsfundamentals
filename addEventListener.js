// addEventListener(); - Añadir un escuchador

var boton = document.getElementById('boton');
var boton2 = document.getElementById('boton2');

// va a seleccionar el identificador boton

// haz un alert que diga holaaa

function alerta(){

	alert('holaaa');

}

// tomamos la var boton y añadimos el escuchador addEventListerner, 
// 1er parámetro que tipo de eventos va a escuchar 
// 2do parámetro cual va a ser la función que va a ejecutar

boton.addEventListener('click', alerta);

// RemoveEventlistener();

function removerAlerta(){

// va a tomar el boton listener y va a aplicar el removerEventListener, 
// va a remover el evento click y la función alerta

	boton.RemoveEventlistener('click', alerta);
}

boton2.addEventListener('click', removerAlerta);