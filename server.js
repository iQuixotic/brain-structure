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
// const db = require('./models');

//connect to the database brain_db on the server
// const connectMe = process.env.MONGODB_URI || 'mongodb://localhost/brain_db'; 
// mongoose.connect(connectMe);
// mongoose.Promise = global.Promise;

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



