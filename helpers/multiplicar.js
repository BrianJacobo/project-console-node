const fs = require("fs");
var colors = require('colors');

const crearArchivo = async (n, l) => {
  try {
    console.log("==============================");
    console.log("tabla del:", n);
    console.log("==============================");
    let salida = "";
    let consola = "";

    if (l) {
      for (let i = 1; i <= l; i++) {
        salida +=`${n} x ${i} = ${n * i}\n`;
        consola += `${n} ${colors.green('x')} ${i} = ${n * i}\n`;
      }
      console.log(consola);
    } else if(l==false) {
      for (let i = 1; i <= 10; i++) {
        salida +=`${n} x ${i} = ${n * i}\n`;
        consola += `${n} ${colors.green('x')} ${i} = ${n * i}\n`;
      }
      console.log('l se mantuvo en 10');
    }

    fs.writeFileSync(`./salida/tabla-de-${n}.txt`, salida);
    return `tabla-de-${n}.txt`;
  } catch (error) {
    throw error;
  }
};

/* const crearArchivo= (n)=>{
    console.log('==============================');
    console.log('tabla del:',n)
    console.log('==============================');
    let salida='';
    for (let i = 1; i < 11; i++) {
        salida += `${n} x ${i} = ${n*i}\n`;
    }
    console.log(salida);
    fs.writeFileSync(`tabla-de-${n}.txt`, salida)
    console.log(`tabla-de-${n}.txt was created`);
} */

module.exports = {
  crearArchivo: crearArchivo,
};
