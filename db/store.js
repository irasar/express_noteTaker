//had to scrap store
//class for your notes
// const fs = require("fs");
// const util = require("util");
// const { stringify } = require("querystring");
// const { json } = require("express");
// const readFileAsync = util.promisify(fs.readFile);
// const writeFileAsync = until.promisify(fs.writeFile);

// class Store {
  //this will read from db.json and return a readfile and return the data
  // read() {
  //   return readFileAsync("db/db.json", "utf-8");
  // }
  //write will stringify the note and send it to the db.json file. use the constructor inside this this.write functiiom
  // write(note) {
  //   return writeFileAsync("db/db.json", JSON.stringify(note));
  // }
//this reading the file db.json reading all the notes in the array, adding te single note to that array, then we're writing updated notes/
  // addnote(note) {
  //   return this.read()
  //     .then((data) => JSON.parse(data))
  //     .then((notes) => [...notes, note])
  //     .then((newNotes) => this.write(newNotes));
  // }

// getNotes(){
//   return this.read().then((notes) => json.parse(notes));
// }



//del will delete the files. get notes and use filter method for ids.
//   del(id) {
//     return this.getnotes()
//     .then((notes) => notes.filter((note) => note.id !== id))
//         .then((filteredNotes) => {
//           console.log(filteredNotes);
//           this.write(filteredNotes);
//         });
//     }
//   }
// module.exports = new Store();
