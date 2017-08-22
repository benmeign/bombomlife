const mongoose = require('mongoose');
const { Schema } = mongoose;

const challengeSchema = new Schema({
    name: String
});

module.exports = mongoose.model('Challenges', challengeSchema);