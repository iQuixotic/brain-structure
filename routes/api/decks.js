const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../../passport');
const deckController = require('../../controllers/decks');

// for full decks
router.route('/')
    .get(deckController.findAll)
    .post(deckController.create);

// for decks by id
router.route('/:id')
    // .delete(deckController.erase)
    .get(deckController.findOne)
    .delete(deckController.remove);

// for cards within decks
router.route('/card/:id')
    .delete(deckController.updateDelCard)
    .put(deckController.updateAddCard);
    
    
module.exports = router;