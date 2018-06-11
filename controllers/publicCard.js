const mongoose = require("mongoose");
const db = require('../models');

module.exports = {

    // return all cards from the db
    findAll: function(req, res, next) {
        console.log('already here')
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


    // findNext: function(req, res, next) {
    //     console.log('hit the db 222e')
    //     db.NoteCard
    //         .find().next()
    //         .then((dbModel) => { 
    //             console.log(res)
    //             res.json(dbModel) 
    //         })
    //         .catch(err => res.json(err))
    // },

    // findPrev: function(req, res, next) {
    //     console.log('hit the db 222e')
    //     db.NoteCard
    //         .findOne({})
    //         .then((dbModel) => { 
    //             console.log(res)
    //             res.json(dbModel) 
    //         })
    //         .catch(err => res.json(err))
    // },

    // find a single note card by ID
    findById: function(req, res) {
        db.NoteCard
          .findById(req.params.id)
          .then((dbModel) => { 
            res.json(dbModel) 
        })
          .catch(err => res.status(422).json(err));
    },

    // return cards within a given category
    findbyCat: async (req, res, next) => {
        db.NoteCard
            .find(({category: req.body.cat}))
            await (res => res.json())
            .catch(res => res.json(error))
    },

    // delete a single notcard from the database
    erase: async (req, res, next) => {
        db.NoteCard
            .findById({ _id: req.params.id })
            await (dbModel => dbModel.remove())
            await (dbModel => res.json(dbModel))
            .catch(res => res.json(error))
    },    

    // create a new note card and add to the data base
    create: async (req, res, next) => {
        db.NoteCard
          .create(req.body)
          await (dbModel => res.json(dbModel))
          .catch(err => res.json(error));
      },

    // edit a single note card
    update: async (req, res, next) => {
        db.NoteCard
            .findById({ _id: req.params.id }, req.body)
            await (dbModel => res.json(dbModel))
            .catch(err => res.json(error));
    },

}