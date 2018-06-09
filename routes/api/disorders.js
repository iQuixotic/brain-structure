const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../../passport');
const disorderController = require('../../controllers/disorders');

router.route('/disorders/list')
    .get(disorderController.findAll);

router.route('/disorders/:name')
    .get(disorderController.findOne);

    
module.exports = router;

// // Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);