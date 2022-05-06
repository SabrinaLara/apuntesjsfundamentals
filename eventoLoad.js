// permite ejecutar un código o función cuando se haya cargado 
// completamente el elemento, a lo que se le haya agregado a el evento

// Al cargar todo el código luego se ejecuta el código

window.addEventListener('load', function(){

	function elegirColor(){


var estadoActivador = document.getElementById('colorFavorito').checked;


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


});