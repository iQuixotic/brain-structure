const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../../passport');
const userCardController = require('../../controllers/privateCard');

// for cards by id
router.route('/myCards/:data')
    .post(userCardController.add);

    
module.exports = router;