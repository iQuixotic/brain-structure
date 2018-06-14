const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let NoteCardSchema = new Schema({

    _id: {
        type: Number,
    },
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
    owned: {
        type: Boolean,
    },
    author: {
        type: String,
    },
    likes: {
        type: Number,
    },
    dislikes: {
        type: Number,
    }
 
});

let NoteCard = mongoose.model('NoteCard', NoteCardSchema);

module.exports = NoteCard;