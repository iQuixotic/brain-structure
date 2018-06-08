const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let NoteCardSchema = new Schema({

    content: {
        front: {
            type: String
        },
        back: {
            type: String
        }
    },
    category: {
        type: String,
    },
    author: {
        type: String, // reference
    },
    likes: {
        type: Number,
    },
    disikes: {
        type: Number,
    }
 
});

let NoteCard = mongoose.model('NoteCard', NoteCardSchema);

module.exports = NoteCard;