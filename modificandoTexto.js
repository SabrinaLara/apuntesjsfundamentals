var parrafos = document.getElementsByClassName('texto'),
	pequeño = document.getElementById('pequeño'),
	mediano = document.getElementById('mediano'),
	grande = document.getElementById('grande'),
	mayusculas = document.getElementById('mayusculas'),
	minusculas = document.getElementById('minusculas');


pequeño.addEventListener('click', function(e) {
	
	// var i es igual a 0 quiero que se repita mientras que i sea menor a, 
	// la variable i se actulice en cada ejecucion
	for (var i = 0; i < parrafos.length; i++){

		// seleccione a parrafos en su posición i, es decir por cada párrafo que haya
		// y acceda a su propiedad style
		parrafos[i].style.fontSize = '10px';

	}
	
	
});

mediano.addEventListener('click', function(e) {
	
	for (var i = 0; i < parrafos.length; i++){

		parrafos[i].style.fontSize = '16px';

	}
	
	
});

grande.addEventListener('click', function(e) {
	
	for (var i = 0; i < parrafos.length; i++){

		parrafos[i].style.fontSize = '20px';

	}
	
	
});

mayusculas.addEventListener('click', function(e) {
	
	for (var i = 0; i < parrafos.length; i++){

		parrafos[i].style.textTransform = 'uppercase';

	}
	
	
});

minusculas.addEventListener('click', function(e) {
	
	for (var i = 0; i < parrafos.length; i++){

		parrafos[i].style.textTransform = 'lowercase';

	}
	
	
});