const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');


// // google start
// passport.use(new GoogleStrategy({
//   clientID: keys.googleAuthClientID,
//   clientSecret: keys.googleAuthClientSecret,
//   callbackURL: '/auth/google/callback'
// }, (accessToken, refreshToken, profile, cb) => {
//   User.findOrCreate({ googleId: profile.id }, function (err, user) {
//     return cb(err, user);
//   }
//   )}));
  
//   app.get('/auth/google', passport.authenticate('google', {
//     scope: ['profile', 'email']
//   }));
  
//   app.get('/auth/google/callback', passport.authenticate('google'));
// // google end