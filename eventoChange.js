// evento que se produce cuando un elemnto cambia su estado

function elegirColor(){

// crea una var que se llame que va a ser igual a, 
// le agregamos el checked propiedad de los input, de tipo checkbox

var estadoActivador = document.getElementById('colorFavorito').checked;

// el valor de true o false que da en consola, lo almacenamos en estado activador

if (estadoActivador == true) {

	document.getElementById('verde').disabled = false;
	document.getElementById('azul').disabled = false;
	document.getElementById('otro').disabled = false;

	// le aplicamos a la propiedad disabled que lo coloque en false para
	// que dejen de estar desabilitados
}else {

	document.getElementById('verde').disabled = true;
	document.getElementById('azul').disabled = true;
	document.getElementById('otro').disabled = true;

}

};

// Seleccionamos 

var inputColorFavorito = document.getElementById('colorFavorito');

// le agergamos al input el eventlistener

inputColorFavorito.addEventListener('change', elegirColor);




