const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../../passport');
const storeController = require('../../controllers/store');

    // all cards from storage
router.route('/store/all')
    .get(storeController.findAll)
    // .post(storeController.create);
    

router.route('/store/all/:data')
    .post(storeController.create);

    // for cards by id
// router.route('/store/all/:id')
    // .post(storeController.add);

module.exports = router;


