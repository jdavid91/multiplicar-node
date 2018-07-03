const argv = require('./config/yargs').argv;
const colors = require('colors');

/*require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Crea el archivo con los argumentos q se les envia', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {

            alias: 'l',
            default: 10
        }

    })

.help()
    .argv;*/



const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        /*listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo leido ${archivo}`))
            .catch(e => console.log(e));*/
        break;

    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');

}

//let base = '5';

//console.log(multiplicar);
//multiplicar.crearARchivo;
//console.log(process.argv);
//let argv2 = process.argv;
//console.log(argv.base);
//console.log(argv.limite);





//let parametro = argv[2];
//let base = parametro.split('=')[1]


//console.log(base);


/*crearArchivo(base)
    .then(archivo => console.log(`Archivo creado ${archivo}`))
    .catch(e => console.log(e));*/