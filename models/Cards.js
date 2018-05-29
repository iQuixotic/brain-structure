const mongoose = require('mongoose');
const Decks = require('./Decks.js');
const Users = require('./Users.js');
let Schema = mongoose.Schema;

// has a many to many relationship with Decks
let CardModel = new Schema({

    user: {
        type: String,                        // later will be type: Users.Types.ObjectId, 
        required: true
    },
    title: {
        type: String,
        required: true,
    }, 
    content: {
        front: { type: String, required: true},
        back: {type: String, required: true}
    },
    verified: {
        type: Number,
        required: true,
        default: 0
    }   
});

let Card = mongoose.model('Card', CardModel);

module.exports = Card;