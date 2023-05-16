 // PROBLEMA:
// Deseamos imprimir una serie de números desde el 0 hasta n números. En este caso
// hasta el 4
let numerito = 0; // Declaramos desde el número que deseamos partir.

// Usamos un bucle while para repetir este proceso hasta que se cumpla la condición:
while(numerito < 5) {
	console.log(numerito);
	numerito++;
} 
console.log("recursividad :");
// Función recursiva:
function recursiva(numerito) { // Recive un número
	console.log(numerito); // Imprimimos en consola el número
	if (numerito < 5) { // Evalua si es menor a 5
		// Llamamos nuevamente a nuestra función enviandole el número siguiente:
		return recursiva(numerito + 1);
	} else { // La función deja de llamarse a sí misma:
		return 5;
	}
}
recursiva(0)