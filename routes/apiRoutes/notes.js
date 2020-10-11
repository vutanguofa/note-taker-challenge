const router = require("express").Router();
const {
    notes
} = require('../../db/db');

const {
    addNote
} = require('../../lib/addNotes');

router.get('/notes', (req, res) => {
    let saved = notes;
    res.json(saved);
})

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let note = addNote(req.body, notes);
    res.json(note);
})

module.exports = router;