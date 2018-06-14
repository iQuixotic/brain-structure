const mongoose = require("mongoose");
const db = require('../models');

module.exports = {

    // return all cards from the db
    findAll: function(req, res) {
        console.log('wrong place i think')
        db.Store
            .find({}) 
            .then((dbModel) => { 
            res.json(dbModel) 
            })
            .catch(err => res.json(err))
    },

    // create a new note card and add to the data base
    create: function(req, res) {
        console.log('yes i am heere')
        db.Store
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.json(error));
      },

}