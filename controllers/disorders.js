const mongoose = require("mongoose");
const db = require('../models');

module.exports = {

     // find and return all disorders in the db
    findAll: async (req, res) => {
         console.log('made it here') 
        db.Disorder
            .find({})  
            await console.log(res.json())
            await (dbModel => res.json(dbModel)) 
            await console.log((dbModel))
            .catch(err => res.status(422).json(err));
    },    
    
    // find a single disorder by name
    findOne: async (req, res, next) => {
        db.Disorder.find({ name: req.body.disName}) 
        await (res => res.json())
            .catch(res => res.json(error))
    }    

}