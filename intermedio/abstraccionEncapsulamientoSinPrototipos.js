// OBJETO BASE
const studentBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourses: undefined,
    learningPaths: undefined,
    socialMedia: {
      twitter: undefined,
      instagram: undefined,
      facebook: undefined,
    },
  };


  function isObject(subject) {
    return typeof subject == "object";
}

function isArray(subject) {
    return Array.isArray(subject)
}

function deepCopy(subject) {
    let copySubject;

    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);
  
    if (subjectIsArray) {
      copySubject = [];
    } else if (subjectIsObject) {
      copySubject = {};
    } else {
      return subject;
    }
  
    for (key in subject) {
      const keyIsObject = isObject(subject[key]);
  
      if (keyIsObject) {
        copySubject[key] = deepCopy(subject[key]);
      } else {
        if (subjectIsArray) {
          copySubject.push(subject[key]);
        } else {
          copySubject[key] = subject[key];
        }
      }
    }
  
    return copySubject;
}

const marta = deepCopy(studentBase);

console.log(marta);


Object.defineProperty(marta, "name", {
	value: "marta", // Definimos el valor del atributo "name" como "Juanito"
	configurable: false
});
Object.seal(marta); // evita poder borrar las propiedades

marta.name = "marti"
console.log(marta);

console.log(Object.isSealed(marta)); // Verificar si no se pueden borrar los atributos de un objeto
console.log(Object.isFrozen(marta)); // Verificar si los atributos de un objeto no pueden ser borradas ni editadas