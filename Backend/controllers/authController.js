const passport = require('passport');
const User = require('../models/postUserModel');

// Google OAuth callback
exports.googleAuthCallback = (req, res) => {
  passport.authenticate('google', { failureRedirect: '/' })(req, res, () => {
    // Successful authentication, redirect or send response as needed
    res.json({ message: 'Google login successful' });
  });
};