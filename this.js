// Seleccionamos los parrafos

var parrafos = document.getElementsByClassName('texto');

// accedo a la propiedad classNAme

for(var i = 0; i < parrafos.length; i++){

	parrafos[i].addEventListener('click', function () {

		this.className = 'texto fondo-rojo';

		// cuando this se usa para los eventos, esta específica
		// cual fue el obj o eleme al cual se le aplicó el evento
		
	});

}

// en ámbito global, this se refiere añ objecto window

var planta = {
	color: 'verde',
	tamaño: 'grande',
	informacion: function(){
		console.log('el color es de la panta es: ' + this.color);

		// al usar la palabra reservada this en un 
		// obj este se convierte en el nombre del obj
	}
}

