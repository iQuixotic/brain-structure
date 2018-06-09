// const router = require("express").Router();
const router = require('express-promise-router')();
const auth = require('./auth')
const disorders = require('./disorders')

// api Routes
router.use(auth);
router.use(disorders);

module.exports = router;
