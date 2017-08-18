var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bombomlife');

var Moment = require('../models/moment.js')

const firstMoment =
[
    {
        "text": "We sang Heal the World at Ironhack class",
    },
    ]

Moment.remove({}, function(err){
  if(err) {
    console.log(err)
  }
  else {
    console.log('Success!')
    Moment.insertMany(firstMoment, function(err, mongooseDocuments){
      if(err) {
        console.log(err)
      }
      else {
        console.log('Success! ' + mongooseDocuments.length + ' documents have been added.')
      }
    })
  }
})