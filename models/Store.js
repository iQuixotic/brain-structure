const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StoreSchema = new Schema({

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

let Store = mongoose.model('Store', StoreSchema);

module.exports = Store;