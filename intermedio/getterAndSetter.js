function isObject(subject) {
    return typeof subject == "object";
  }
  
  function isArray(subject) {
    return Array.isArray(subject);
  }
  
  function requiredParam(param) {
    throw new Error(param + " es obligatorio");
  }
  
  function createStudent({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
  } = {}) {
    const privateAtributos = { // 👈👈
          // '_name' es el atributo privado
          // 'name' es el parámetro que recibe la función
      "_name": name,
    };
  
    const publicAtributos = {
		// El resto de atributos serán públicos:
    email,
    age,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
    get name(){
        return privateAtributos["_name"];
    },
   set name(newName){
    if(newName.lenght != 0){
        privateAtributos["_name"] = newName;
    }else{
        console.warn("Tu nombre debe tener al menos un carcter");
    }
       
    },
		/* readName() { // 👈👈
      return privateAtributos["_name"];
    },
    changeName(newName) { // 👈👈
      privateAtributos["_name"] = newName;
    }, */
  }
/*   Object.defineProperty(publicAtributos, "readName", { // 👈👈
    writable: false,
    configurable: false,
  });
  Object.defineProperty(publicAtributos, "changeName", { // 👈👈
    writable: false,
    configurable: false,
  }); */
    return publicAtributos ;
  }

  // Creamos un nuevo objeto
const juan = createStudent({ email: "juanito@frijoles.co", name: "Juanito" });

// Intentamos eliminar y alterar los métodos changeName y readName


console.log(juan.name); // Se ejecuta el GETTER
juan.name = "Rigoberto"; // Se ejecuta el SETTER
console.log(juan.name);
console.log(Object.getOwnPropertyDescriptors(juan));