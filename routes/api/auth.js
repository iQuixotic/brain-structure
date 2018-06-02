const router = require("express").Router();
// const router = require('express-promise-router')();
const UsersControllers = require('../../controllers/users');
const { validateBody, schemas } = require('../../helpers/routeHelpers');

router.route('/register')
    .get(UsersControllers.register);
    // .post(validateBody(schemas.authSchema), UsersControllers.register);

router.route('/')
    .post(UsersControllers.signIn);

router.route('/secret')
    .get(UsersControllers.secret);

module.exports = router;



