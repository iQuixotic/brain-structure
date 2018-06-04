// const router = require("express").Router();
const router = require('express-promise-router')();
const auth = require('./auth')

// api Routes
router.use(auth);

module.exports = router;
