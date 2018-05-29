const mongoose = require('mongoose');
let Schema = mongoose.Schema;

// contains no relationships
let BrainImgModel = new Schema({

    title: {
        type: String,
        required: true,
    }, 
    href: {
        type: String,
        required: true

    },
    Verified: {
        type: Number,
        required: true,
        default: 0
    }   
});

let BrainImg = mongoose.model('BrainImg', ImgModel);

module.exports = BrainImg;