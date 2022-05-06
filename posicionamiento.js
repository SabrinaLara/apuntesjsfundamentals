// especificamos el valor de la variable y seleccionamos
// [0] estamos seleccionando un arreglo, la caja 

var contenedorParrafos = document.getElementsByClassName('flexbox')[0],

	izquierda = document.getElementById('izquierda'),

	centro = document.getElementById('centro'),

	derecha = document.getElementById('derecha');

// var declaradas e inicializadas, añadimos los eventos a los botones

izquierda.addEventListener('click', function(e) {
	
	contenedorParrafos.style.justifyContent = 'flex-start';

});

centro.addEventListener('click', function(e) {
	
	contenedorParrafos.style.justifyContent = 'center';

});

derecha.addEventListener('click', function(e) {
	
	contenedorParrafos.style.justifyContent = 'flex-end';

});