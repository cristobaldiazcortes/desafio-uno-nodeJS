const fs = require('fs')
// crear el json

//const registros = []

//fs.writeFileSync("citas.json", JSON.stringify(registros));




const registrar = (nombre, edad, tipo, color, enfermedad) => {
    let objeto = {nombre: nombre, edad: edad, tipo: tipo, color: color, enfermedad: enfermedad}
    let archi = JSON.parse(fs.readFileSync('citas.json'))
    archi.push(objeto);
    fs.writeFileSync('citas.json', JSON.stringify(archi))
    }
   
    

//leer el json


const leer = () => {
const leerJson = fs.readFileSync('citas.json', 'utf8');
// visualizar por consola
//console.log("Citas a realizar: ", leerJson)

JSON.parse(leerJson).forEach((cita) => {
  console.log(cita)
    })
}


    


//exportar a index.js

module.exports = { registrar, leer }