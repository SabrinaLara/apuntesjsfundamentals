// Focus

var campoNombre = document.getElementById('nombre');

campoNombre.addEventListener('focus', function() {

// la funcion va a tomar al mismo campoNombre y le añadimos un atributo 'value'

	campoNombre.setAttribute('value', 'tengo el foco');

});

// Evento Blur

campoNombre.addEventListener('blur', function() {

// toma a campo nombre y me cambia el atributo

	campoNombre.setAttribute('value', 'ya no esta esta el foco');

	alert('el campo perdio el foco');

});