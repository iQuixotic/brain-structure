const mongoose = require('mongoose');
const Users = require('./Users.js');

let Schema = mongoose.Schema;

// has a many to one relationship with users
let NoteModel = new Schema({

    user: {
        type: String,                        //Users.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true,
    }, 
    cards: {
        type: String,
        required: true
    }, 

});

let Deck = mongoose.model('Note', NoteModel);

module.exports = Deck;