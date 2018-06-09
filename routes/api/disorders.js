const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../../passport');
const DisorderController = require('../../controllers/disorders');

router.route('/disorders/list')
    .get(DisorderController.findAll);

router.route('/disorders/:name')
    .get(DisorderController.findOne);

    
module.exports = router;