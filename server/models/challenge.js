const mongoose = require('mongoose');
const { Schema } = mongoose;

const challengeSchema = new Schema({
    text: String
});

module.exports = mongoose.model('Challenge', challengeSchema);