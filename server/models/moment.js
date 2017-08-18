var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const MomentSchema = new Schema({
    text: {
        type: String,
        required: [true, 'text is required']
      },
    date: {
        type: Date, 
        default: Date.now      
      },
    public: {
      type: Boolean,
      default: false
    }
});

module.exports = mongoose.model('Moment', MomentSchema);