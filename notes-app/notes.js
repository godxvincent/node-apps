/**
 * Inicio docstring
 */
const fs = require("fs");
const FILE_NAME = "notes.json";
const chalk = require("chalk");

/**
 * Inicio docstring para la funcion loadNotes
 * @return {Array} Array of notes
 */
function loadNotes() {
  // debugger;
  try {
    const databuffer = fs.readFileSync(FILE_NAME);
    return JSON.parse(databuffer.toString());
  } catch (e) {
    return [];
  }
}

/**
 * Inicio docstring para la funcion saveNotes
 * @param {object} notes Salva el objeto notes en un archivo
 */
function saveNotes(notes) {
  console.log("Notas actualizadas: ", notes);
  fs.writeFileSync(FILE_NAME, JSON.stringify(notes));
}

/**
 * Inicio docstring para la funcion printNote
 * @param {object} note Imprime el objeto note
 */
function printNote(note) {
  console.log(chalk.yellow.bold(`== Titulo de la nota ==> ${note.title}`));
  console.log(chalk.cyan.bold(` == Contenido ==> ${note.body}`));
}

/**
 * Inicio docstring para la funcion addNote
 * @param {string} title The first number
 * @param {string} body The first number
 */
function addNote(title, body) {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);
  if (!duplicateNote) {
    const note = {
      title,
      body
    };
    notes.push(note);
    saveNotes(notes);
    console.log(
      chalk.green.underline.bold("La nota fue agregada correctamente")
    );
  } else {
    console.log(
      chalk.red.underline.bold("La nota que intenta ingresar ya existe!!")
    );
  }
}

/**
 * Inicio docstring para la funcion addNote
 * @param {string} title The first number
 */
function removeNote(title) {
  const notes = loadNotes();
  if (notes.length > 0) {
    const otherNotes = notes.filter(note => note.title !== title);
    if (notes.length === otherNotes.length) {
      console.log(chalk.yellow.underline.bold(`La nota "${title}" no existe`));
    } else {
      console.log(
        chalk.green.underline.bold(
          `La nota "${title}" fue eliminada correctamente`
        )
      );
      saveNotes(otherNotes);
    }
  } else {
    console.log(chalk.yellow.underline.bold("No hay notas para eliminar"));
  }
}

/**
 * Inicio docstring para la funcion addNote
 */
function listNotes() {
  const notes = loadNotes();
  if (notes.length > 0) {
    console.log(chalk.blue.underline.bold("Lista de notas"));
    notes.forEach(element => {
      printNote(element);
    });
  } else {
    console.log(chalk.red.underline.bold("No hay notas salvadas"));
  }
}

/**
 * Inicio docstring para la funcion addNote
 * @param {string} title imprime una nota dado el nombre
 */
function readNote(title) {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);
  if (note) {
    printNote(note);
  } else {
    console.log(
      chalk.red.underline.bold("La nota solicitada no esta en la lista")
    );
  }
}

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote
};
