
// seleccionamos boton
var boton = document.getElementById('boton');

boton.addEventListener('dblclick', function(){

	var nuevoParrafo = document.createElement('p');
	var textoNuevo = document.createTextNode('este es nuevo texto');

	// agregamos el texto nuevo en el párrafo

	nuevoParrafo.appendChild(textoNuevo);

	// le añadimos a nuevoPárrafo la clase

	nuevoParrafo.className = 'texto';

	// se selecciona el contenedor padre

	var contenedor = document.getElementsByClassName('contenedor')[0];

	// agregamos dentro del contenedor con appendChild

	contenedor.appendChild(nuevoParrafo);

	// 


});
