const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../../passport');
const decksController = require('../../controllers/decks');

// for creating a new deck
router.route('/myCards/')
    .post(decksController.create);

    
module.exports = router;