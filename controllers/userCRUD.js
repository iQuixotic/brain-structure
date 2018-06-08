const mongoose = require("mongoose");
const db = require('../models');

module.exports = {
    
    // delete a card reference from users profile
    erase: async (req, res, next) => {
        db.User.decks.remove({ cards: req.body.cards})   // < -- can i do this ?
        await (res => res.json())
            .catch(res => res.json(error))
    },    

}


