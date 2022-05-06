// creamos la var parrafo, que va a ser igual al parrafo donde esta la clase texto
// seleccionamos con el getElementByClassName, seleccionandolo en su poscición 0

var parrafo =document.getElementsByClassName('texto')[0];

// Evento mouseover

parrafo.addEventListener('mouseover', function() {


	var nuevoParrafo = document.createElement('p');
	
	var textoNuevo = document.createTextNode('este es nuevo texto');

	// agregamos el texto nuevo en el párrafo

	nuevoParrafo.appendChild(textoNuevo);

	// le añadimos a nuevoPárrafo un atributo de clase con las clse texto
	// El método setAttribute, que toma dos parametros, 
	// primero el nombre de la propiedad a setear y el valor de dicha propiedad
	// element.setAttribute(attributename, attributevalue)

	nuevoParrafo.setAttribute('class', 'texto');

	// Al nuevo parrafo le añadimos un id (identificador) y agregamos parrafo agregado

	nuevoParrafo.id = 'parrafoAgregado';

	// se selecciona el contenedor padre

	var contenedor = document.getElementsByClassName('contenedor')[0];

	// agregamos dentro del contenedor con appendChild

	contenedor.appendChild(nuevoParrafo);
	
});


//Evento mouseOut

parrafo.addEventListener('mouseout', function(){

	// la funcion a ejecutar: va a crear una var que va a ser igual a, 
	// dGID que va a seleccionar el que tenga el id 'parrafoAgregado'

	var parrafoAgregado = document.getElementById('parrafoAgregado');

	// Luego va a seleccionar el contenedor padre

	var contenedor = document.getElementsByClassName('contenedor')[0];

	// le decimos que en contenedor padre, remueva uno de sus hijos

	contenedor.removeChild(parrafoAgregado);

});