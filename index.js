const { agregar, leer } = require("./operaciones.js") // importamos las funciones del archivo operaciones
const [accion, id, nombre, edad, animal, color, enfermedad] = process.argv.slice(2) // este es la funcion que nos permite ingresar argumentos por la terinal y los guarda en una arreglo

if (accion === "agregar"){ // consultamos si el argumento que ingresamos coincide 
    agregar(id, nombre, edad, animal, color, enfermedad) // llamamos a la funcion agregar y le pasamos los argumentos
}
if (accion === "leer")
    leer() // llamamos a la funcion leer

