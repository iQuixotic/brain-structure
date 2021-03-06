const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../../passport');
const pubCardController = require('../../controllers/publicCard');

    // all cards
router.route('/cards/public')
    .get(pubCardController.findAll)
    .post(pubCardController.create);

    //first card on main page
router.route('/cards/public/one')
    .get(pubCardController.findOne)

    // cards by id
router.route('/cards/public/:id')
    .get(pubCardController.findById)
    .delete(pubCardController.erase)
    .put(pubCardController.update);

// cards by category name
router.route('cards/category/:category')
    .get(pubCardController.findbyCat);

    
module.exports = router;


