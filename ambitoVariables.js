// SCOPE es el alcace de una var, local o global.

// Var Global es la que se declara afuera de una función

var mensaje = 'holas';

function saludar (){
	alert(mensaje);
}

saludar();


// Var local se declara dentro de una función

function despedirse(){

	var despedida = 'Adios, hasta luego';
	
	alert(despedida);

}

despedirse();



/*

Siempre se puede acceder desde dentro de una función a variables 
que esten afuera de la función, pero desde afuera hacia adentro no

Se puede acceder a una var desde dentro hacia afuera

Esto permite proteger nuestro código, para que desde afuera no lo modifiquen


*/ 

(function(){


	// funcipon autoejecutable


}())