const colors = require('colors');
const argv = require('./config/yargs').argv;
const { crearArchivo } = require('./archivos/archivos');

crearArchivo(argv.base)
    .then((resultado) => {
        console.clear;
        console.log(`Se creo el archivo ${resultado.nombreArchivo}!!!`.green);
        if (argv.listar) {
            console.log('========================');
            console.log(`Tabla del ${argv.base}`.rainbow);
            console.log('========================');
            console.log(String(resultado.datos).green);
            console.log('========================');
        }
    })
    .catch(err => console.log(`Ocurrio el siguiente error al generar el archivo: \n ${err}`.red))