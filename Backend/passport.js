const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./models/postUserModel')
const sendToken = require("./utils/jwtToken")


const GOOGLE_CLIENT_ID = "860151762645-mnn7qkvoufijtp9h7hh5jpcpsi5t4k35.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
  },
  async (accessToken, refreshToken, profile, cb) => {
    try {
      let user = await User.findOne({ 'googleId': profile.id });
      if (!user) {
        user = new User({
          googleId: profile.id,
          email: profile.emails[0].value,
          date: Date.now(),
          plateform: "Google",
        });
        await user.save();
        sendToken(user, 201, res);
      }
      sendToken(user, 201, res);
      return done(null, user);
    } catch (error) {
      return done(error, false);
    }
  }
));

passport.serializeUser((user,done)=>{
    done(null,user);
})

passport.deserializeUser((user,done)=>{
    done(null,user);
})