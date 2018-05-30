// const mongoose = require('mongoose');
// const Users = require('./Users.js');
// const BlogResps = require('./BlogResp.js')

// let Schema = mongoose.Schema;

// // BlogPostModel has a one to many relationship with BlogResp 
// let BlogPostModel = new Schema({

//     user: {
//         type: String,
//         required: true
//     },
//     title: {
//         type: String,
//         required: true,
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

// let BlogPost = mongoose.model('BlogPost', BlogPostModel);

// module.exports = BlogPost;
