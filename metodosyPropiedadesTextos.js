// var planta = {

// 	color: 'verde',
// 	tamaño: 'grande',
// 	especie: 'orquídea',
// 	//también se pueden añadir funciones. Al agregarla como una propiedad deja de llamarse así, y se denomina método. Método es una función de un objeto.
// 	crecer: function(){

// 	}
// }

var texto = 'holaa';

// length - numero de caracteres. Accede al numero de caracteres que hay en la variable o cadena de texto.

var numeroCaracteres = texto.length;

//toUpperCase() 

var mayus = texto.toUpperCase();

//toLowerCase()

var minu = texto.toLowerCase();

//substring(0,0) - Extraer desde un punto hasta otro de caracteres

var extraido = texto.substring(0,2);

// replace(valor1, valor2) - Reemplazar una cadena de catacteres por otra

var textoReemplazado = texto.replace('texto', 'libro');

// index0f('o') - Buscar el primer caracter que coincida e indicara la posición

var buscar0 = texto.indexOf('o');

//lastIndex0f('o') busca el último caracter que coincida e indicará la posición

// var buscarUltimo = texto.lastIndex0f('o');

//split('') Se convierte la cadena de texto en un arreglo dividiendo los elementos según el separador indicado

var arreglo = texto.split(' ');