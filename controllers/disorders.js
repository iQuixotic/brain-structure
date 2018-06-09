const mongoose = require("mongoose");
const db = require('../models');

module.exports = {

     // find and return all disorders in the db
     findAll: async (req, res, next) => {
        db.Disorder.find({})   
        await (res => res.json())
            .catch(res => res.json(error))
    },    
    
    // find a single disorder by name
    findOne: async (req, res, next) => {
        db.Disorder.find({ name: req.body.disName}) 
        await (res => res.json())
            .catch(res => res.json(error))
    },    

}