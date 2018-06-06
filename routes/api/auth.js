// const router = require("express").Router();
const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../../passport');
const UsersController = require('../../controllers/users');
const {validateBody, schemas} = require('../../helpers/routeHelpers');

router.route('/register')
    // .post(UsersControllers.register); //no-auth route for testing
    .post(validateBody(schemas.addAuthSchema), UsersController.register);

router.route('/signin')
    .post(validateBody(schemas.loginAuthSchema), passport.authenticate('local', {session: false}),  UsersController.signIn);
    // .get(UsersControllers.signIn);

router.route('/secret')
    .get(passport.authenticate('jwt', {session: false}), UsersController.secret);

module.exports = router;



