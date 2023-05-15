// Si declaramos una propiedad o método de una clase como static, podremos acceder a estos sin la necesidad de instanciar dicha clase o prototipo.

class Patito {
	static sonidito = "cuak!";

	static hacerSonidito() {
		return "cuak! x2";
	}
}

// Por fuera de clase Patito, podemos acceder a lo siguiente sin crear alguna instancia:
// Al atributo `sonidito`
console.log(Patito.sonidito)

// Al método `hacerSonidito`
console.log(Patito.hacerSonidito());


const objetito = {
    name: "Juanito",
    email: "juanito@frijolitos.io",
    age: 18,
}

console.log(
	Object.getOwnPropertyNames(objetito)
); // [ 'name', 'email', 'age' ]
console.log(
	Object.getOwnPropertyDescriptors(objetito)
);