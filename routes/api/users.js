const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../../passport');
const decksController = require('../../controllers/decks');
const notesController = require('../../controllers/notes');

// for creating a new deck
router.route('/myCards/')
    .post(decksController.create)
    .get(decksController.getAll)

// for creating a new note attached to a deck
router.route('/decks/notes/')
    .post(notesController.create)
    
module.exports = router;