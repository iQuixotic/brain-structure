const mongoose = require("mongoose");
const db = require('../models');

module.exports = {

    // // add a new card reference to the db
    // add: function(req, res) {
    //     console.log(req.body)
    //     console.log('this route!!')
    //     db.NoteCard
    //         .create(req.body)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.json(err))
    // },
   




    // add a new card reference to the db
    add: function(req, res) {
        console.log(req.body)
        console.log('this route!! and more')
        db.User
            .findByIdAndUpdate("5b21e07ecd3ded30f0141de8", {$push:  {cards: req.body}}, {new: true})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err))
    },

      // add a new card reference to the db
      add: function(req, res) {
        console.log(req.body.cards)
        console.log('this route!! and more')
        db.User
            .findByIdAndUpdate("5b2931ef4893ea26a0dbbf3c", 
            {$push: {decks: {
                title: req.body.title,
                cards: req.body.cards
            } }}, {new: true})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err))
    },
}