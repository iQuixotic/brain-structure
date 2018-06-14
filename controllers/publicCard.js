const mongoose = require("mongoose");
const db = require('../models');

module.exports = {

    // return all cards from the db
    findAll: function(req, res, next) {
        console.log('wrong place i think')
        db.NoteCard
            .find({}) 
            .then((dbModel) => { 
            res.json(dbModel) 
            })
            .catch(err => res.json(err))
    },

    findOne: function(req, res) {
        db.NoteCard
            .findOne({})
            .then((dbModel) => { 
            res.json(dbModel) 
            })
            .catch(err => res.json(err))
    },

    // find a single note card by ID
    findById: function(req, res) {
        db.NoteCard
          .findById(req.params.id)
          .then((dbModel) => { 
          res.json(dbModel) 
        })
          .catch(err => res.status(422).json(err));
    },

    // delete a single notcard from the database
    erase: function(req, res) {
        db.NoteCard
            .findById({ _id: req.params.id })
            .then((dbModel) => dbModel.remove())
            .then((dbModel) => res.json(dbModel))
            .catch(err => res.json(error))
    },    


    // create a new note card and add to the data base
    create: function(req, res) {
        console.log('yes i am heere')
        db.NoteCard
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.json(error));
      },

    // edit a single note card
    update: async (req, res, next) => {
        db.NoteCard
            .findById({ _id: req.params.id }, req.body)
            await (dbModel => res.json(dbModel))
            .catch(err => res.json(error));
    },

             // return cards within a given category
    findbyCat: async (req, res, next) => {
        db.NoteCard
            .find(({category: req.body.cat}))
            await (res => res.json())
            .catch(res => res.json(error))
    },
    

}