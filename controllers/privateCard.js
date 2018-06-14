const mongoose = require("mongoose");
const db = require('../models');

module.exports = {

    // add a new card reference to the db
    add: function(req, res) {
        console.log('hit for the first time !!')
        db.User
            .find({ _id: "5b21e07ecd3ded30f0141de8"})
            .populate('cards')
            .exec()
            console.log('route for population hit')
            .then(res => { 
                res.json({
                    count: data.length,
                    added: data.map(datum => {
                        return {
                            _id: datum._id
                        }
                    })
                }) 
            })
            .catch(err => res.json(err))
    },
}
