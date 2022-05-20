const notes = require("./notes.js");
const yargs = require("yargs");
// const { demandOption } = require("yargs");
// Remueve los dos primeros elementos de los argumentos

// Para recuperar arguentos pasados por la consola process.argv

// console.log(process.argv);
// console.log(process.argv[2]);

// const command = process.argv[2];
// const args = yargs(hideBin(process.argv)).argv;
// console.log(args);
// console.log(args._[0]);
// if (command === "add") {
//     console.log("Adding note: ");
// } else if (command === "remove") {
//     console.log("Removing note... ");
// }

yargs
  .command(
    "add",
    "Adiciona un titulo a la nota",
    {
      title: {
        alias: "t",
        describe: "Corresponde al titulo que se añadira a la nota",
        string: true,
        demandOption: true
      },
      body: {
        alias: "b",
        describe: "Este parametro sirve para setear el contenido de la nota",
        string: true,
        demandOption: true
      }
    },
    function(argv) {
      notes.addNote(argv.title, argv.body);
    }
  )
  .help();

yargs
  .command(
    "remove",
    "Remueve una nota guardada",
    function(yargsp, helpOrVersionSet) {
      // El parametro helpOrVersionSet es para indicar si el flag de helpOrVersion fue seteado en los parametros
      // console.log(helpOrVersionSet);
      return yargsp.option("title", {
        alias: "t",
        describe: "Titulo de la nota a eliminar",
        string: true,
        demandOption: true
      });
    },
    function(argv) {
      notes.removeNote(argv.title);
    }
  )
  .help();

yargs
  .command({
    command: "list",
    describe: "Presenta una lista de notas creadas",
    builder: {
      first: {
        alias: "f",
        default: false,
        describe: "Este parametro lista las primeras 5 notas"
      }
    },
    handler: function() {
      notes.listNotes();
    }
  })
  .help();

yargs
  .command(
    "read",
    "Lee una nota",
    {
      title: {
        alias: "t",
        describe: "Corresponde al titulo de la nota que se entregará",
        string: true,
        demandOption: true
      }
    },
    function(argv) {
      notes.readNote(argv.title);
    }
  )
  .help();

yargs.parse();
