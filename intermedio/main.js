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