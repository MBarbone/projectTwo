const express = require('express');
const passport = require('passport');

require('dotenv').config();
// var google = new Google(keys.google);
// const keys = require('./config/keys');

const GoogleStrategy = require('passport-google-oauth20').Strategy;

const PORT = process.env.PORT || 5000;

const app = express();

passport.use(new GoogleStrategy({
    clientID: googleAuthClientID,
    clientSecret: keys.googleAuthClientSecret,
    callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile, cb) => {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
  }
  )}));

app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

app.get('/auth/google/callback', passport.authenticate('google'));







app.listen(PORT, () => {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  