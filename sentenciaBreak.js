// BREAK permite detener el ciclo

var semana = ['domingo','Lunes','martes','miercoles','jueves','viernes','sabado']

for (var i = 0; i < semana.length; i++) {

	console.log(semana[i]);

	if (semana[i] == 'miercoles') {
		break;
	}

}

// mientras que i sea menor que la cant de ele de var semana, luego de la eje actualiza la var i en una unidad