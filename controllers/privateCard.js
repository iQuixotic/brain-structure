const mongoose = require("mongoose");
const db = require('../models');

module.exports = {

    // add a new card reference to the db
    add: function(req, res) {
        console.log(req.body)
        console.log('this route!!')
        db.NoteCard
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err))
    },
   




    // // add a new card reference to the db
    // add: function(req, res) {
    //     console.log(req.body)
    //     console.log('this route!!')
    //     db.Cards
    //         .findByIdAndUpdate("5b21e07ecd3ded30f0141de8", {$push: {cards: req.body}}, {new: true})
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.json(err))
    // },
}
