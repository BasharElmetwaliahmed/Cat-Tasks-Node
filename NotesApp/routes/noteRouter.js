const express = require("express");
const {
  getAllNotes,
  createNote,
  getForm,
} = require("../controllers/notesControllers");
const router = express.Router();

router.get("/", getAllNotes);
router.route("/form").get(getForm).post(createNote);

module.exports = router;
