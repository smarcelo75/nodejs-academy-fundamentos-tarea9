const { aplicarTema } = require('./config/colors');
const argv = require('./config/yargs').argv;
const { crearArchivo } = require('./archivos/archivos');

crearArchivo(argv.base)
    .then((resultado) => {
        console.clear;
        console.log(`Se creo el archivo ${resultado.nombreArchivo}!!!`.green);
        if (argv.listar) {
            aplicarTema(argv.base, resultado.datos, argv.tema);
        }
    })
    .catch(err => console.log(`Ocurrio el siguiente error al generar el archivo: \n ${err}`.red))