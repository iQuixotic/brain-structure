const mongoose = require("mongoose");
const db = require('../models');

module.exports = {

     // find and return all disorders in the db
    findAll: function(req, res, next) {
         console.log('made it here') 
        db.Disorder
            .find({})  
                .then((dbModel) => { 
                    console.log(res)
                    res.json(dbModel) 
                })
                // await console.log((dbModel))
                .catch(err => res.json(err));
    },    
    
    // find a single disorder by name
    findOne: async (req, res, next) => {
        db.Disorder
            .find({ name: req.body.disName}) 
            await (dbModel => res.json(dbModel))
            .catch(err => res.json(err))
    }    

}