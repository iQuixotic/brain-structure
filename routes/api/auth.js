const router = require("express").Router();
// const router = require('express-promise-router')();
const UsersControllers = require('../../controllers/users');
const {validateBody, schemas} = require('../../helpers/routeHelpers');

router.route('/register')
    // .post(UsersControllers.register); //no-auth route for testing
    .post(validateBody(schemas.authSchema), UsersControllers.register);

router.route('/sign-in')
    .get(UsersControllers.signIn);

router.route('/secret')
    .get(UsersControllers.secret);

module.exports = router;



