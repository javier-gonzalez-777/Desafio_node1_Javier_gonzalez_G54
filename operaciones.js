const fs = require('fs') // incluimos el metodo file system

const agregar = (nombre, edad, animal, color, enfermedad)=> { // funcion anonima
    const citas = JSON.parse(fs.readFileSync("citas.json", "utf8")) // leemos el archivo de tipo json
    const id = Math.floor(Math.random() * 100).toString() //  creamos un id randon .toString() convierte el número en un string
    if (!nombre || !edad || !animal || !color || !enfermedad) { // preguntamos si ingresamos todos los argumentos
        console.log("Por favor ingrese todos los datos")
        return
    }
    citas.push({ id, nombre,edad, animal, color, enfermedad }) //agregamos los datos a la constante citas
    fs.writeFileSync("citas.json", JSON.stringify(citas)) // escribimos los datos en el archivo json 
    console.log(citas) // mostramos el archivo json con el primer registro en formato json
}

const leer = () => {
    const citas = JSON.parse(fs.readFileSync("citas.json", "utf8"))
    console.log(citas)
}
module.exports = { agregar, leer} // importamos las funciones 