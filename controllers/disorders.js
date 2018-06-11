const mongoose = require("mongoose");
const db = require('../models');

module.exports = {

     // find and return all disorders in the db
    findAll: function(req, res, next) {
        db.Disorder
            .find({})  
            .then((dbModel) => { 
                res.json(dbModel) 
            })
            .catch(err => res.json(err));
    },    
    
    // find a single disorder by name
    findOne: function(req, res, next)  {
        db.Disorder
            .find({ name: req.body.disName}) 
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err))
    }    

}