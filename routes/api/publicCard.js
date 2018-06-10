const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../../passport');
const pubCardController = require('../../controllers/publicCard');

// all cards
router.route('/cards/public')
    .get(pubCardController.findAll)
    // .post(pubCardController.create);

// cards by id
router.route('/cards/:id')
    .get(pubCardController.findById)
    .delete(pubCardController.erase)
    .put(pubCardController.update);

// cards by category name
router.route('cards/category/:category')
    .get(pubCardController.findbyCat);

    
module.exports = router;


