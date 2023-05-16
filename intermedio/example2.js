const juan = {
  name: "Juanito",
  age: 18,
  approvedCourses: ["Curso 1"],
  addCourse(newCourse) {
    console.log("This", this);
    console.log("This.approvedCourses", this.approvedCourses);
    this.approvedCourses.push(newCourse);
  }
};
Object.defineProperty(juan, "nombreNuevaPropiedad", {
	value: "JavaScript", // Valor que tendrá
	enumerable: false,
	writable: true,
	configurable: false,
});

Object.defineProperty(juan, "navigator", { // Creamos un nuevo atributo
	value: "Chrome",
	enumerable: false, // 👀
	writable: true,
	configurable: true,
});
Object.defineProperty(juan, "terminal", { // Creamos un nuevo atributo
	value: "WSL",
	enumerable: true,
	writable: true,
	configurable: false, // 👀
});

console.log( // Imprimimos las propiedades del objeto
	Object.getOwnPropertyNames(juan)
); // [ 'name', 'age', 'approvedCourses', 'addCourse', 'navigator' ] 👈 Ya nos aparece



//console.log(Object.keys(juan));
// console.log(Object.getOwnPropertyNames(juan));
// console.log(Object.entries(juan));

// console.log(Object.getOwnPropertyDescriptors(juan));
console.log( // Mostramos las propiedades del objeto previamente... 👁👁
	Object.keys(juan)
); // [ 'name', 'age', 'approvedCourses', 'addCourse', 'terminal' ]

delete terminal; // Intentamos eliminar ❌

console.log( // Listamos los atributos para comprobar si se eliminó `terminal` 🤔
	Object.keys(juan)
); // [ 'name', 'age', 'approvedCourses', 'addCourse', 'terminal' ] 👈 NO se eliminó
