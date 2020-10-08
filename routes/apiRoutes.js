const { response } = require("express");
const path = require("path");
const express = require("express");

const uuid = require("uuid");
var app = express();
const store = require("../db/store");
const notes = require("../db/db.json");
//GET route
module.exports = function (app){
    app.get("/api/notes", function (req, res) {
store
.read()
.then((notes) => response.json(notes))
.catch((err) => res.status(500).json(err));
    });

// POST route
app.post("/api/notes", function(req, res){
    req.body.id = uuid.v1();
    //passed the data from the request to the class method
    store
    .addnote(req.body)
    .then((note) => response.json(note))
    .catch((err) => res.status(500).json(err));
});
// DELETE route
app.delete("/api/notes/:id", function(req, res) {
    store
    .delete(req.params.id)
    .then(() => response.json(notes))
})



