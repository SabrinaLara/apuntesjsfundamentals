// // crear nuevo elemento o nodo
// // se añade dentro de la var parrafoo para poder seleccionarlo


// // se crea un nuevo párrafo
// var parrafoNuevo = document.createElement('p');

// // se crea un nuevo texto para el párrafo
// var textoNuevo = document.createTextNode('hola, este es el nuevo texto');

// // agregar el texto nuevo en el párrafo
// parrafoNuevo.appendChild(textoNuevo);

// // Agregar un nuevo atributo de clase 
// // parrafoNuevo.setAttribute(atributo, valor);

// parrafoNuevo.setAttribute('class', 'texto');

// // seleccionar contenedor 
// // para acceder al primer elemento tiene que estar en la posición [0], ya que si no arroja el arreglo

// var contenedor = document.getElementsByClassName('contenedor')[0];

// // Aregar el nuevo párrafo dentro del contenedor

// contenedor.appendChild(parrafoNuevo);