// const router = require("express").Router();
const router = require('express-promise-router')();
const auth = require('./auth');
const disorders = require('./disorders');
const decks = require('./decks');
const pubCards = require('./publicCard');

// api Routes
router.use(auth);
router.use(disorders);
router.use(decks);
// router.use(pubCards);

module.exports = router;
