// Funciones: Sirven para indicarle al programa una tarea, ejecutan piezas de códigos reutilizables.

// Funciones con parámetros
// Dos pasos: 
//1. Declarar la función ¿indicar a js cuál es la tarea que se quiere realizar?

function saludar(){

	alert('hola');

// la tarea de la función reservada de js alert es mostrar en una ventana el parámetro que se le asigne.

}

//2.Ejecutar la funcion

//saludar();

//función con parámetros

//Declaración

// function suma(numero1, numero2){

// 	var resul = numero1 + numero2;
// 	console.log(resul); 
// }

//Ejecución

// suma(21, 4);
// suma(10, 5);

//Funciones con retorno

function suma(numero1, numero2){

	var resul = numero1 + numero2;
	return resul; 
}