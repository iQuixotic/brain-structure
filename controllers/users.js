const JWT = require('jsonwebtoken');
const User = require('../models/Users');
const {JWT_SECRET} = require('../configuration');

signedToken = user => {
    return JWT.sign({
        iss: 'iQuixotic',
        sub: user.id,
        iat: new Date().getTime(), 
        exp: new Date().setDate(new Date().getDate()+1)
    }, JWT_SECRET);
}

module.exports = {

    // create a new user to add to the database
    register: async (req, res, next) => {
        console.log('you hit me')

        // deconstruct
        const {userName, email, password} = req.body;

        // check for duplicate emails
        const copy = await User.findOne({email});
        if (copy) {
            console.log('i founc a copy')
            return res.status(403).json({error: 'There is already an account associated with this Email'})
        }

        // construct a new user and save to db
        const newUser = new User({ userName, email, password })
        await newUser.save();
        console.log('im trying herer')

        res.json({ user: "created"});
    },

    // allow a user to sign in
    signIn: async (req, res, next) => {
        // Generate token
        const token = signedToken(req.user);
        res.status(200).json({token});
        console.log('successful login');
    },

    // create a secret  
    secret: async (req, res, next) => {       
        res.json({secret: 'resource'});
        console.log('Im in the secret place !');
    }
}