const passport = require('passport');
const JwtStrat = require('passport-jwt').Strategy;
const {ExtractJwt} = require('passport-jwt');
const LocalStrat = require('passport-local').Strategy;
const {JWT_SECRET} = require('./configuration')
const User = require('./models/Users'); 

passport.use(new JwtStrat({
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

// local strategy
// passport.use(new LocalStrat({
//     usernameField: 'userName'
// }, async (username, password, done) => {

//     // find user by username
//     if(!user) {
//         return done(null, false);
//     }

//     // verify pasword is correct

//     // if not found, exit

//     // else, return the user
// }));