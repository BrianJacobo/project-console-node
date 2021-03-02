
const { crearArchivo } = require("../03-bases_de_node/helpers/multiplicar");
const argv= require('./config/yargs')

require('colors')


console.clear();
console.log(argv);

crearArchivo(argv.b,argv.l).then(archivo=>console.log(archivo.rainbow, 'creado')).catch(err=>console.log(err))
