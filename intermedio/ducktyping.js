// El duck typing es la forma de programar donde identificamos los elementos por los métodos y atributos que tenga por dentro.

function isObject(subject) {
    return typeof subject == "object";
  }
  
  function isArray(subject) {
    return Array.isArray(subject);
  }
  
  function requiredParam(param) {
    throw new Error(param + " es obligatorio");
  }
  function createLearningPath({ name = requiredParam("name"),courses = []}) {
    const private = { 

        "_name": name,
        "_courses": courses,
      };
      const public = {
        get name(){
            return private["_name"];
        },
       set name(newName){
        if(newName.lenght != 0){
            private["_name"] = newName;
        }else{
            console.warn("Tu nombre debe tener al menos un carcter");
        }
           
        },
        get courses(){
            return private["_courses"];
        },
       
      }
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
       
    }
  }

    return publicAtributos ;
  }

  // Creamos un nuevo objeto
const juan = createStudent({ email: "juanito@frijoles.co", name: "Juanito" });

// Intentamos eliminar y alterar los métodos changeName y readName


console.log(juan.name); // Se ejecuta el GETTER
juan.name = "Rigoberto"; // Se ejecuta el SETTER
console.log(juan.name);
console.log(Object.getOwnPropertyDescriptors(juan));