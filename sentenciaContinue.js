// Permite saltar a la siguiente ejecución del ciclo

var semana = ['domingo','Lunes','martes','miercoles','jueves','viernes','sabado']

 for(var i = 0; i < semana.length; i++){

 	if (semana[i]  == 'jueves') {
 		continue; 
 	}

 	// quiero que el ciclo se ejecute mientras que i sea menor a semana.length y en cada ciclo atualice la var i en una unidad

 	console.log(semana[i]);

 	// de la var semana en su posicón i

 }