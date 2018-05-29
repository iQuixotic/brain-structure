const express = require('express');
// const serveStatic = require('serve-static');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();
// const mongojs = require('mongojs');

// files
const db = require('./models');

//connect to the database brain_db on the server
const connectMe = process.env.MONGODB_URI || 'mongodb://localhost/brain_db'; 
mongoose.connect(connectMe);
mongoose.Promise = global.Promise;

// use morgan, bodyParser, and cors
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(morgan("dev"));
 
// use routes
// app.use();

// error handling
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

// render error to the page for easier troubleshooting
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  })
});
// - - - - - - - - - - - - - - - - - - 
//listening port
const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {

  console.log("Server listening on: http://localhost:" + PORT);
});



// db.brain_db.drop();

// db.Users.drop();
// db.BlogPosts.drop();
// db.BlogResp.drop();
// db.Cards.drop();
// db.Decks.drop();
// db.Note.drop();

db.Users.create([{
  userName: 'dan123',
  email: 'dan@dan.com',
  password: '123'
}, {
  userName: 'ben123',
  email: 'ben@ben.com',
  password: '123'
}]);

db.BlogPosts.create({
   user: 'dan123',
   title: 'The Best Post Ive Ever seen !!',
   body: 'I love to post things about science and the brain. I feel awesome right now, and if you ' +
   'guys want, you should all totally come over this weekend !!! My parents are out of town. ',
   Likes: 7,
   Dislikes: 2
  });

  db.BlogResp.create({
    user: 'ben123',
    body: 'Dude, what are you even taking about ? I cant EVEN ...',
    Likes: 4,
    Dislikes: 4
  });

  db.Cards.create({
      user: 'ben123',
      title: 'Card Title Here',
      content: {front: 'Here is some data that goes on the front of the card fosho',
                back: 'card1'},
      verified: 3
  });

  db.Decks.create({
      user: 'ben123',
      name: 'wicked', 
      cards: 'All of them' 
  });

  db.Note.create({
      user: 'ben123',
      name: 'please dont forget to study squiggles'
  })

// .then(user => {
//   console.log(`${user.length} users created`);
// })
// .catch((err) => {
//   console.log(err);
// })
// .finally(() => {
//   mongoose.connection.close();
// });