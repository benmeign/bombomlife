const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const { Schema } = mongoose;
const Challenge = require('./challenge')

const userSchema = new Schema({
    name: String,
    runningChallenge: {
        type: Schema.Types.ObjectId,
        ref: 'Challenge',
    },
    isChallengeAccepted: {
        type: Boolean,
        default: false,
    },
    challengesSucceeded: [],
    challengesSkipped: [],
    challengesFailed: [],
});

userSchema.plugin(passportLocalMongoose, { usernameField: "email" });

module.exports = mongoose.model('User', userSchema);