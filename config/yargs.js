const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    description:'muestra la base de la tabla'
  })
  .option('l',{
      alias:'list',
      type:'number',
      demandOption:true,
      default:false,
      description:'tabla hasta l'
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "la base y listar tienen que ser un numero";
    }
    return true;
  })
  .argv;

  module.exports=argv