const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String
});

userSchema.plugin(passportLocalMongoose, { usernameField: "email" });

module.exports = mongoose.model('User', userSchema);