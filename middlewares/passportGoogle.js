import passport from "passport";
import User from "../models/User.js";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import bcrypjs from "bcryptjs";

export default passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_URI_BACK,
        },
        
        
        async (accessToken, refreshToken, profile, done) => {
            try {
                let hash = bcrypjs.hashSync(profile.id, 10)
                let user = await User.findOne({ Email: profile.emails[0].value });
                if (!user) {
                    user = new User({
                        Photo: profile.photos[0].value,
                        Name: profile.name.givenName,
                        LastName: profile.name.familyName,
                        Email: profile.emails[0].value,
                        Password: hash,
                        category: "client",
                    });
                    await user.save();
            
                } return done(null, user);
            } catch (error) {
                return done(error, null);
            }
        }
    ))