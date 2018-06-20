const mongoose = require("mongoose");
const db = require('../models');

module.exports = {

    
    // //   // add a new card reference to the db
    //   add: function(req, res) {
    //     console.log(req.body.cards)
    //     console.log('this route!! and more')
    //     db.User
    //         .findByIdAndUpdate("5b2a77667886f31b0079171d", 
    //         {$push: {decks: {
    //             title: req.body.title,
    //             cards: req.body.cards
    //         } }}, {new: true})
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.json(err))
    // },

    // create a new deck
    create: function(req, res) {
        console.log(req.body)
        db.User
        .findByIdAndUpdate("5b2a77667886f31b0079171d", 
        {$push: {decks: {
            title: req.body.title,
            cards: req.body.cards
        } }}, {new: true})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.json(err))
},
    
    // // delete a card reference from users profile
    // erase: async (req, res, next) => {
    //     db.User.decks
    //         .remove({ _id: req.params.id }, req.body)   // < -- can i do this ?
    //         await (res => res.json())
    //         .catch(res => res.json(error))
    // },    

    // find all decks belonging to a particular user
    // findAll: async (req, res, next) => {
    //     db.User.decks
    //         .find({})
    //         await (dbModel => res.json(dbModel))
    //         .catch(res => re.json(error))
    // }, 

    // // find a deck when named clicked on
    // findOne: async (req, res, next) => {
    //     db.User.decks
    //         .findById({ _id: req.params.id })
    //         await(dbModel => res.json(dbModel))
    //         .catch(res => res.json(error))
    // },

    
    // // delete an entire deck from a db
    // remove: async (req, res, next) => {
    //     db.User.decks
    //     .findById({ _id: req.params.id })
    //     await (dbModel => res.json(dbModel))
    //     .catch(res => res.json(error))
    // },
    // // update a deck by deleting a card
    // updateDelCard: async (req, res, next) => {
    //     db.User.decks
    //         .findOneAndUpdate({ _id: req.params.id }, req.body)
    //         await (dbModel =>  dbModel.remove())
    //         await (dbModel => res.json(dbModel))
    //         .catch(res => res.json(error))
    // },

    // // update a deck by adding a card
    // updateAddCard: async (req, res, next) => {
    //     db.User.decks
    //         .findOneAndUpdate({ _id: req.params.id }, req.body)
    //         await (dbModel => res.json(dbModel))
    //         .catch(res => res.json(error))
    // }

}