// arreglo con todos los parrafos
var parrafos = document.getElementsByClassName('texto');

// accedemos a los párrafos en su posición índice, 
// accediendo a la propiedad style, que tienen todos los elemento html
// Style a su vez es un objeto y por ende tiene propiedades

parrafos[0].style.width = '50%';

parrafos[1].style.height = '200px';

parrafos[2].style.padding = '0';

parrafos[0].style.border = '2px solid black';

var boton = document.getElementById('boton');

boton.addEventListener('click', function () {

	parrafos[0].style.width = '100%';
	
});
