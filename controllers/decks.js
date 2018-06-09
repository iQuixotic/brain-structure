const mongoose = require("mongoose");
const db = require('../models');

module.exports = {
    
    // delete a card reference from users profile
    erase: async (req, res, next) => {
        db.User.decks.remove({ cards: req.body.cards})   // < -- can i do this ?
        await (res => res.json())
            .catch(res => res.json(error))
    },    

    // find all decks belonging to a particular user
    findAll: async (req, res, next) => {
        db.User.decks.find({})
        await(dbModel => res.json(dbModel))
            .catch(res => re.json(error))
    }, 

    // find a deck when named clicked on
    findOne: async (req, res, next) => {
        db.User.decks.find({})
        await(dbModel => res.json(dbModel))
            .catch(res => res.json(error))
    },

    // create a new deck
    create: async (req, res, next) => {
        db.User.decks
        .create(req.body)
        await(dbModel => res.json(dbModel))
            .catch(res => res.json(error))
    },
    
    // delete an entire deck from a db
    remove: async (req, res, next) => {
        db.User.decks
        .findById({ _id: req.params.id })
        await (dbModel => res.json(dbModel))
            .catch(res => res.json(error))
    },
    // update a deck by deleting a card
    updateDel: async (req, res, next) => {
        db.User.decks
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        await (dbModel =>  dbModel.remove())
        await (dbModel => res.json(dbModel))
            .catch(res => res.json(error))
    },

    // update a deck by adding a card
    updateAdd: async (req, res, next) => {
        db.User.decks
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        await (dbModel => res.json(dbModel))
            .catch(res => res.json(error))
    }

}