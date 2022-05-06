var nuevoParrafo = document.createElement('p');

var nuevoTexto = document.createTextNode('hola, este es el nuevo texto');

// incluimos el texto dentro del p, le decimos que incluya a nuevoTexto

nuevoParrafo.appendChild(nuevoTexto);

nuevoParrafo.setAttribute('class', 'texto');

var parrafos = document.getElementsByClassName('texto');

var padreParrafos = parrafos[0].parentNode;

// reemplazando el elemento, usamos el medoto replaceChild, el primer parámetro por cual se va a reemplazar, 
// el segundo cual es el que se va a reemplazar o eliminar para colocar el nuevo parrafo

padreParrafos.replaceChild(nuevoParrafo, parrafos[2]);

// Eliminando un elemento

padreParrafos.removeChild(parrafos[0]);