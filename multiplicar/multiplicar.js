const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    /*return new Promise((resolve, reject) => {
        if (!Number(base)) {

            reject('no es un numero');
            return;
        }
        let data = '';*/
    console.log('==========='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }

    /*fs.openFile(`folder/tabla del ${base}.txt`, data, (err) => {
        if (err)
            reject(err);
        else
            resolve(` tabla- ${base}.txt`);
    });*/
    // })
}


let crearArchivo = (base, limite) => {

        return new Promise((resolve, reject) => {

            if (!Number(base)) {
                reject('No es un numero');
                return;
            }
            let data = '';

            for (let i = 1; i <= limite; i++) {


                data += `${base} * ${i}= ${base*i}\n`;
            }

            fs.writeFile(`folder/tabla del ${base}.txt`, data, (err) => {
                if (err)
                    reject(err);
                else
                    resolve(` tabla- ${base}.txt`);
            });

        });
    }
    //esto es para que este disponible a exportar!
module.exports = {
    crearArchivo,
    listarTabla
}