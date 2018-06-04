const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const {ExtractJwt} = require('passport-jwt');
const {JWT_SECRET} = require('./configuration')
const User = require('./models/Users'); 

passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: JWT_SECRET

    // call payload to access tokens data and 
    // call done to exit the function
}, async (payload, done) => {
    try {
        // Find user with token
        const user = await User.findById(payload.sub);

        // if the user can't be found, exit the function
        if(!user) {
            return done(null, false)
        }

        // else return the user
        done(null, user);
    } catch(error) {
        done(error, false);
}
}))