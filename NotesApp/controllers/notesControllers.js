const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema({
  title: String,
  text: String,
});

const Note = mongoose.model("note", NoteSchema);

exports.getAllNotes = (req, res) => {
  mongoose.connect(
    "mongodb://localhost:27017",
    Note.find({}).then((results) => {
      res.render("notes", {
        notes: results,
      });
    })
  );
};
exports.getForm = (req, res) => {
  res.render("index");
};
exports.createNote = (req, res) => {
  mongoose.connect("mongodb://localhost:27017").then(() => {
    const NewNote = new Note({
      title: req.body.title,
      text: req.body.text,
    });

    NewNote.save().then((result) => {
            res.redirect("/notes");

    });
  });
};
