// Se pueden ejecutar funciones después de un cierto perído de tiempo. esta solo se ejecuta una vez.

// setTimeout(funcion, tiempo en milisegundos);

var texto = 'Holis';

setTimeout(saludar, 5000);

function saludar(){

	console.log(texto);

}

