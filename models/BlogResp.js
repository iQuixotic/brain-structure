// const mongoose = require('mongoose');
// const Users = require('./Users.js');
// const BlogPosts = require('./BlogPosts.js')

// let Schema = mongoose.Schema;

// // BlogRespModel has a many to one relationship with BlogPosts 
// let BlogRespModel = new Schema({

//     user: {
//         type: String,
//         required: true
//     },
//     body: {   
//         type: String,
//         required: true
//     },
//     Likes: {   
//         type: Number,
//         required: true,
//         default: 0
//     },
//     Dislikes: {   
//         type: Number,
//         required: true,
//         default: 0
//     },   
// });

// let BlogResp = mongoose.model('BlogResp', BlogRespModel);

// module.exports = BlogResp;
