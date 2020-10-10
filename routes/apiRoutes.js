const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "../db");
const outputPath = path.join(OUTPUT_DIR, "db.json");
const fs = require("fs");


let notesArray = [];
let savedNotes = [];

module.exports = function(app) {

    app.get("/api/notes", function (req, res) {
        savedNotes = [];
        fs.readFile(outputPath, 'utf-8', (err, data) => {
if (err) throw err;
data = JSON.parse(data)
for (i = 0; i < data.length; i++) {
    savedNotes.push(data[i])
}
res.send(savedNotes);
    });
});


//GET route
module.exports = function (app){
    app.get("/api/notes", function (req, res) {


// POST route
app.post("/api/notes", function(req, res){
    // req.body.id = uuid.v1();
    //passed the data from the request to the class method
    // store
    // .addnote(req.body)
    // .then((note) => response.json(note))
    // .catch((err) => res.status(500).json(err));
    console.log(req);
})};
// DELETE route
// app.delete("/api/notes/:id", function(req, res) {
//     store
//     .delete(req.params.id)
//     .then(() => response.json(notes))
// }}



