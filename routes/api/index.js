const router = require("express").Router();
const auth = require('./auth')

// api Routes
router.use("/register", auth);

module.exports = router;
