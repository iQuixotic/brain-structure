const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs')

// has a one to many relationship with notes, BlogPosts, BlogResp,
// decks, and cards
let UserSchema = new Schema({

    userName: {
        type: String,
        // required: true
    },
    firstName: {
        type: String,
        // required: true
    },
    lastName: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        // required: true
    }, 
    password: {
        type: String,
        // required: true
    }   
});

// 
UserSchema.pre('save', async function (next){ 
    try {

    } catch(error){
        next(error)
    }
})

let User = mongoose.model('User', UserSchema);

module.exports = User;