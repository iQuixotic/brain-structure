const express = require('express');
const router = require('express-promise-router')();
const UsersControllers = require('./controllers/users');

router.route('./register')
    .post(UsersControllers.register);

router.route('./')
    .post(UsersControllers.signIn);

router.route('./secret')
    .get(UsersControllers.secret);

module.exports = router;



