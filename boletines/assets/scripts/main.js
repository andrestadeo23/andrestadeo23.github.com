/*Imprimes un texto en consola con JavaScript
console.log("Hola desde un archivo externo.....");*/

//DOM
//let container = document.querySelector(".container"); (devuelve solo un elemento aunque haya varios)
//let tabla = document.querySelectorAll(".table"); // (Recorre todo el árbol y devuelve todos los elementos de la busqueda)

/*let links = document.querySelectorAll("a");

links.forEach(function(link){
	console.log(link);
});*/

/*console.log(container);

let celdas = document.querySelectorAll("td");

celdas.forEach(function(td) {
	td.addEventListener('click', function() {
		console.log(this);
	})
});*/

//Obtener los elementos de la clase .close
let links = document.querySelectorAll(".close");


//Agregar un evento click a cada uno de ellos
links.forEach(function(link){
	link.addEventListener("click",function(ev) {
		ev.preventDefault();
		let content = document.querySelector('.content');

		//Quitarle las clases de animación que ya tiene
		content.classList.remove("fadeInDown");
		content.classList.remove("animated");

		content.classList.add("fadeOutUp");
		content.classList.add("animated");

		setInterval(function(){
			location.href = "/boletines";
		},600);
		

		return false;
	});
});


/*Comportamiento por defecto de funciones en JavaScript
hay 2 maneras de evitar el comportamiento por defecto de una función
1. ev 
2. return false 
*/

