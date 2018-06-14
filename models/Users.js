const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs')

let UserSchema = new Schema({

    email: {
        type: String,
        // required: true
    }, 
    password: {
        type: String,
        // required: true
    }, 
    cards: {
        type: Array, 
        // notes: []
    },
 
    // decks: {
    //     title: {
    //         type: String,
    //     },
        // owned:{
        //     cards: {
        //         type: Schema.Types.ObjectId, // ref to cards here
        //         notes: {
        //            type: Array,
        //            content: String,
        //            back: String
        //         }
        //     }

        // } 
    // },
    // hasLikedOrDis: {
    //     type: Array, // must contain a reference to card

    // }  
});


// UserSchema.pre('save', async function (next){ 
//     try {

//         // generate a salt and trap to variable
//         const salt = await bcrypt.genSalt(10);

//         // hashedword = the hashed version of 
//         // itself with salt concatenated to it
//         const hashedword = await bcrypt.hash(this.password, salt);
//         this.password = hashedword;
//         next();
//     } catch(error){
//         next(error)
//     }
// })

// using method, pass the password (post-hashed) from user as 
// perameter through an anonomous function and AWAIT use bcrypt's 
// built-in compare method to check against database

// UserSchema.method.isValidPassword = async function(thisPassword) {
//     try {
//         return await bcrypt.compare(thisPassword, this.password);
//     } catch(error) {
//         throw new Error(error)
//     }
// }

let User = mongoose.model('User', UserSchema);

module.exports = User;