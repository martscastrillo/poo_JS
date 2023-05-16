 // PROBLEMA:
// Deseamos imprimir una serie de números desde el 0 hasta n números. En este caso
// hasta el 4

let numerito = 0; // Declaramos desde el número que deseamos partir.

// Usamos un bucle while para repetir este proceso hasta que se cumpla la condición:
while(numerito < 5) {
	console.log(numerito);
	numerito++;
} 
console.log("recursividad 1 :");
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
console.log("recursividad 2 :");
const numeritos = [1,2,3,4,5,6,7,8,9,9,9,33];
let numer = 0;
for (let index = 0; index < numeritos.length; index++) {
  
   numer = numeritos[index];
   console.log(numer);
    
}
console.log("recursividad 3 :");
const numeritos2 = [1,2,3,4,5,6,7,8,9,9,9,33];
function recursiva2(numerito) { 
    if(numerito.length != 0){
        const firstNum = numerito[0];
        console.log(firstNum);
        numerito.shift();
        return recursiva2 (numerito);
    }
}
recursiva2(numeritos2);