// SINTAXIS

// while(condicion){

// }

// Es como el ciclo for tienen que estar los 3: var de inicialización --> var i = 1; 

var i = 1;

// la condición, lo que debe evaluar --> (i < 11)

while(i < 11){

	document.write(i +'<br>');
	// variable de incremento
	i++;

}







var i = 12;

do{
// haz esto y lo vas a repetir
	document.write(i + '<br>');
	
	i++;

}while(i < 11);
// mientras se cumpla la condición i < 11

// Ciclo do while -  Ejecuta el cógido al menos una vez de primero, sin mirar la condición y si se cumple,
//  ++ la var, evalua la condición.  
// se incremanta en una unidad en cada ejecucuión
// do while ejecuta el código al menos una vez

// Ejecuta el código al menos una vez antes de siquiera tener en cuenta la condición, 
// luego va a empezar a mirar la condición para reiterar