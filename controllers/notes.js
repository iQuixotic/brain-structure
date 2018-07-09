const mongoose = require("mongoose");
const db = require('../models');

module.exports = {

    // add a new card reference to the db
    create: function(req, res) {
        // let num = req.body.deckNum;
        console.log(req.body.deckNum)
        console.log(req.body.notesInput[0])
        db.User
            .findByIdAndUpdate("5b42b6f17df5183ef03b66c3", 
            {$push: {'decks.0.notes': req.body.notesInput[0] }}, )
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err))
    },
   
    // add a new card reference to the db
    add: function(req, res) {
        console.log(req.body)
        console.log('this route!! and more')
        db.User
            .findByIdAndUpdate("5b42b6f17df5183ef03b66c3", {$push:  {cards: req.body}}, {new: true})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err))
    },
    // db.User
    //     .update({
    //         '_id:' '{5b42b6f17df5183ef03b66c3}', 'decks': 
    //     })

    // db.members.update(
    //     {"user_id" : "{1231mjnD-32JIjn-3213}", "campaigns.campaign_id": 3221},
    //     {$push:{"campaigns.$.messages":{"message_id":4213122, "email":"john@gmail.com"}}}
    // )






    
    //   // add a new card reference to the db
    //   add: function(req, res) {
    //     console.log(req.body.cards)
    //     console.log('this route!! and more')
    //     db.User
    //         .findByIdAndUpdate("5b2931ef4893ea26a0dbbf3c", 
    //         {$push: {decks: {
    //             title: req.body.title,
    //             cards: req.body.cards
    //         } }}, {new: true})
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.json(err))
    // },

    
}
