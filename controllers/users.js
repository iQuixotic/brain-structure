const User = require('../models/Users');

module.exports = {
    register: async (req, res, next) => {
        console.log('you hit me')
        // deconstruct
        const {userName, firstName, lastName, email, password} = req.body;

        // check for duplicate emails
        const copy = await User.findOne({email});
        if (copy) {
            console.log('i founc a copy')
            return res.status(403).json({error: 'There is already an account associated with this Email'})
        }

        // construct a new user and save to db
        const newUser = new User({ userName, firstName, lastName, email, password })
        await newUser.save();
        console.log('im trying herer')

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