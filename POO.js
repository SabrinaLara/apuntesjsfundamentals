// Programación orientada a obj

// Clases: sin funciones constructoras y se escriben iniciando con mayúsculas

// CLases de JS ya creadas

// var texto = new String('Hola, soy un texto');

// var numero = new Number(5);

// var boleano = new Boolean(true);

// // Clases de js compuestas

// var arreglos = new Array('ale', 'Mari', 'pedro');

// var objecto = new Object({color: 'verde', tamalo: 'grande'});

// clases personalizadas

// function Persona(nombre, edad){

// 	this.nombre = nombre;
// 	this.edad = edad;

// }

// var persona1 = new Persona('Ani', 25);
// console.log(persona1);

// var persona1 = new Persona();
// persona1.nombre = 'ale';
// persona1.edad = '20';

// var persona2 = new Persona();
// persona2.nombre = 'ani';
// persona2.edad = '25';


// podemos crear nuestras propias clases o propias funciones constructoras, 
// crean obj el cual tiene propiedades 


// clase

function Planta(color, tamaño){
	
	this.color = color;
	this.tamaño = tamaño;
}

var planta1 = new Planta('azul', 'mediano');

// -----------------------------------------------------------------

// objectos Es una colección de propiedades y métodos
// métodos son funciones dentro de los objectos
// pueden ser creados a partir de funciones constructoras 
// dentro de js  creadas por nosotros mismos 
// Se puede reutilizar el código


var planta = {

	color: 'verde',
	tamaño: 'grande',
	daTomate: function(precio){
		console.log(' La planta da tomates ' + planta.color + ' y su tamaño es ' + planta.tamaño + ', su precio es: '+ precio);

	}

}

// console.log(planta.color);
// console.log(planta.tamaño);

// Se pueden colorcar parámetros dentro de los métodos

planta.daTomate('$1000');

