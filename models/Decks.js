// const mongoose = require('mongoose');
// const Cards = require('./Cards.js');
// const Users = require('./Users.js');

// let Schema = mongoose.Schema;

// // has a many to one relationship with Users
// // has a many to many relationship with Cards
// let DeckModel = new Schema({

//     user: {
//         type: String,               // Users.Types.ObjectId,
//         required: true
//     },
//     name: {
//         type: String,
//         required: true,
//     }, 
//     cards: [{
//         type: String,                        //[{type: Schema.Types.ObjectId, ref: 'Cards'}],
//         required: true
//     }], 
   
// });

// let Deck = mongoose.model('Deck', DeckModel);

// module.exports = Deck;
