const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DisorderSchema = new Schema({

    name: {
        type: String,
    },
    summary: {
        type: String,
    },
    brainArchitecture: {
        type: String,
    },
    neuroChem: {
        type: String,
    },
    studies: {
        type: String,
    }
 
});

let Disorder = mongoose.model('Disorder', DisorderSchema);

module.exports = Disorder;