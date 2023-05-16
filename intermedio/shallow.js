const obj1 = {
	a: "a",
	b: "b",
	c: {
		d: "d",
		e: "e"
	}
}

 const obj2 = {}

for (propiedad in obj1) {
	obj2[propiedad] = obj1[propiedad];
}

obj2.a = "AAA";
obj2.b = "BBB";
obj2.a = "atributo a";
obj2.b = "atributo b";
obj2.c.d = "objeto dentro de otro";


console.log(obj2); // { a: 'AAA', b: 'BBB' }
console.log(obj1); // { a: 'AAA', b: 'BBB' }

const obj3 = Object.assign({}, obj1);

// Con esto podemos crear copias exactas
console.log(obj1); // { a: 'a', b: 'b', c: { d: 'd', e: 'e' } }
console.log(obj3); // { a: 'a', b: 'b', c: { d: 'd', e: 'e' } }

// Sin embargo, si hacemos modificaciones en los nested objects...
obj1.c.d = "COPIA DESDE EL OBJ1";

// se verán afectados los demás objetos copiados
console.log(obj3); // { a: 'a', b: 'b', c: { d: 'COPIA DESDE EL OBJ1', e: 'e' } }

const obj4 = Object.create(obj1);
console.log(obj4);

