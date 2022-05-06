var parrafo = document.createElement('p');

var textoNuevo = document.createTextNode('Hola, soy un texto');

parrafo.appendChild(textoNuevo);

parrafo.className = 'texto';

parrafo.setAttribute('class', 'texto');

// var contenedor = document.getElementByClassName('contenedor')[0];

// Seleccionar el elemento padre de un elemento

var primerParrafo = document.getElementsByClassName('texto')[0];

var padreParrafos = primerParrafo.parentNode;

padreParrafos.className = 'contenedor';

// Se accede al elemento padre del parrafo, en este caso el div

padreParrafos.insertBefore(nuevoParrafo, primerParrafo);
