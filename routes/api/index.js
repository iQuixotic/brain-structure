const router = require("express").Router();
const auth = require('./auth')

// api Routes
router.use(auth);

module.exports = router;
