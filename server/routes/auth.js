const express = require('express');
const jwt = require("jwt-simple");
const router = express.Router();
const User = require('../models/user');
const config = require('../config');
const Challenge = require('../models/challenge');

/* Create a user route */

router.post('/signup', (req, res, next) => {
    const {
    email,
        name,
        password
  } = req.body;
    Challenge.findOne().then(challenge => {
        const user = new User({
            email,
            name,
            runningChallenge: challenge._id,
        });
        User.register(user, password, (err) => {
            if (err) {
                return next(err)
            }
            res.json({ success: true })
        })
    })
});


/* Login route */
const authenticate = User.authenticate();
router.post("/login", (req, res, next) => {
    const { email, password } = req.body;
    if (email && password) {
        authenticate(email, password, (err, user, failed) => {
            if (err) {
                return next(err);
            }
            if (failed) {
                return res.status(401).json(failed.message);
            }
            if (user) {
                const payload = {
                    id: user.id
                };
                const token = jwt.encode(payload, config.jwtSecret);
                res.json({
                    token,
                    name: user.name,
                    userId: user.id
                });
            }
        });
    } else {
        res.status(401).json("email ou mot de passe manquant");
    }
});

module.exports = router;