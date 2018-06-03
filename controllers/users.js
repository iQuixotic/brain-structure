const User = require('../models/Users');

module.exports = {
    register: async (req, res, next) => {
        // All user information (req.value.body)
        console.log('UsersController.register() called !');

        const {userName, firstName, lastName, email, password} = req.body;
        const newUser = new User({ userName, firstName, lastName, email, password })
        await newUser.save();

        res.json({ user: "created"});
    },
    signIn: async (req, res, next) => {
        // Generate token
        console.log('the users sign in route has been hit !');
    },
    secret: async (req, res, next) => {
        console.log('UsersController.secret() called !');
    }
}