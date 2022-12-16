
// importar funciones
const { registrar, leer } = require('./operaciones.js')




 const argumentos = process.argv.slice(2)

 const comando = argumentos[0]
 const nombre = argumentos[1]
 const edad = argumentos[2]
 const tipo = argumentos[3]
 const color = argumentos[4]
 const enfermedad = argumentos[5]



if(comando === "registrar"){
    registrar(nombre, edad, tipo, color, enfermedad)
    }



 else if(comando === "leer"){
    leer()
    }

else {
    console.log("ingrese bien los datos")
}

