// const router = require("express").Router();
const router = require('express-promise-router')();
const auth = require('./auth');
const disorders = require('./disorders');
const decks = require('./decks');
const pubCards = require('./publicCard');
const users = require('./users');

// api Routes
router.use(auth);
router.use(disorders);
router.use(decks);
router.use(pubCards);
router.use(users);

module.exports = router;
