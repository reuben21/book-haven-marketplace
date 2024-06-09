require("dotenv").config();
const passportJwt = require("passport-jwt");
const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;
const UserAccount = require("../models/userAccount");

module.exports = passport => {
    passport.use(
        new StrategyJwt(
            {
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                secretOrKey: process.env.JWT_SECRET
            },
            function (jwtPayload, done) {
                // Return the user account if the token has a valid user account
                return UserAccount.findOne({_id: jwtPayload.id})
                    .then((user) => {
                        // console.log(jwtPayload)
                        // console.log("User: ", user);
                        return done(null, user);
                    })
                    .catch((err) => {
                        // console.log("Error: ", err);
                        return done(err);
                    });
            }
        )
    )
}