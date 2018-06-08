const mongoose = require("mongoose");
const db = require('../models');

module.exports = {
    findAll: async (req, res, next) => {
    db.NoteCard.find({})
    await (res => res.json()) 
    .catch (res => res.json(error))
},

findAll: async (req, res, next) => {
    db.NoteCard.find({})
    await (res => res.json()) 
    .catch (res => res.json(error))
},


}