const mongoose = require("mongoose");
const db = require('../models');

module.exports = {

    // return all cards from the db
    findAll: async (req, res, next) => {
        db.NoteCard.find({})
        await (res => res.json())
            .catch(res => res.json(error))
    },

    // return cards within a given category
    findbyCat: async (req, res, next) => {
        db.NoteCard.find(({category: req.body.cat}))
        await (res => res.json())
            .catch(res => res.json(error))
    },

}