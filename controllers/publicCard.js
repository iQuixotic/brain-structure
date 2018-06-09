const mongoose = require("mongoose");
const db = require('../models');

module.exports = {

    // return all cards from the db
    findAll: async (req, res, next) => {
        db.NoteCard
            .find({})
            await (res => res.json())
            .catch(res => res.json(error))
    },

    // find a single note card by ID
    findById: async (req, res, next) => {
        db.NoteCard
          .findById(req.params.id)
          await (dbModel => res.json(dbModel))
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