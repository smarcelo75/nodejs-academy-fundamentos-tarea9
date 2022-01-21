const colors = require('colors');

const temas = [{
        titulo: colors.rainbow,
        linea: colors.green,
        base: colors.white,
        datos: colors.yellow
    },
    {
        titulo: colors.green,
        linea: colors.red,
        base: colors.red,
        datos: colors.rainbow
    },
    {
        titulo: colors.green,
        linea: colors.green,
        base: colors.green,
        datos: colors.green
    }
];

const aplicarTema = (base, datos, tema = 0) => {
    console.log(temas[tema].linea('========================'));
    console.log(temas[tema].titulo('Tabla del ') + temas[tema].base(base));
    console.log(temas[tema].linea('========================'));
    console.log(temas[tema].datos(datos));
    console.log(temas[tema].linea('========================'));
}

module.exports = {
    aplicarTema
}