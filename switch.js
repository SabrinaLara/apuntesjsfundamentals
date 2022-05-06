var colorFavorito = 'azul';

// (colorFavorito) var a evaluar, el break es necesario para interrumpir la ejecución del código.

switch(colorFavorito){

	case 'azul' : console.log('El color Favorito es azul');
	break;

	case 'rojo': console.log('El color Favorito es rojo');
	break;

	case 'amarillo': console.log('El color Favorito es amarillo');
	break;

	default: console.log('no lo conozco');
	break;

}

// a declaración switch evalúa una expresión, comparando el valor de esa expresión con una instancia case, y ejecuta declaraciones asociadas a ese case, así como las declaraciones en los case que siguen.