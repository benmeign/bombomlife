var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bombomlife');

// var Moment = require('../models/moment.js')

// const firstMoment =
//   [
//     {
//       "text": "We sang Heal the World at Ironhack class",
//     },
//   ]

// Moment.remove({}, function (err) {
//   if (err) {
//     console.log(err)
//   }
//   else {
//     console.log('Success!')
//     Moment.insertMany(firstMoment, function (err, mongooseDocuments) {
//       if (err) {
//         console.log(err)
//       }
//       else {
//         console.log('Success! ' + mongooseDocuments.length + ' documents have been added.')
//       }
//     })
//   }
// })


var Challenges = require('../models/challenge.js');

const loadChallenges =
  [
    { "text": "Make at least 2 people smile in the street... using only your smile!" },
    { "text": "Congratulate someone unknown about her/his outfit, hair, attitude..." },
    { "text": "Look at you in the mirror and tell you at least 2 things you like about your body or face" },
    { "text": "Today, try to... get bored! Take 15 minutes without phone, computer, and just let your mind go. You can take a blank page and note all your ideas" },
    { "text": "Thank someone who helped you or made you happy" },
    { "text": "Go sleep early tonight to get at least 8 hours of sleep." },
    { "text": "Go out and wonder or read a book in a park/ the nature." },
    { "text": "Listen to one of your favorite song and send it to someone you love" },
    { "text": "Give some money or some food to a homeless people" },
    { "text": "Help someone you don't know with anything they may need" },
    { "text": "Walk at least 30 minutes (without looking at your phone!)" },
    { "text": "Book a ticket for a show of your like" },
    { "text": "Give a high five to someone you don't know that well" },
    { "text": "Give a call to an old friend" },
    { "text": "Give congratulations to a colleague for his/her job today" },
    { "text": "Ask for advise from a friend or a colleague about his expertise" },
    { "text": "Think about something you failed in your life and find out what you learnt from this difficulty" },
    { "text": "Choose a topic you want to learn about and watch a video about this topic" },
  ]

Challenges.remove({}, function (err) {
  if (err) {
    console.log(err)
  }
  else {
    console.log('Success!')
    Challenges.insertMany(loadChallenges, function (err, mongooseDocuments) {
      if (err) {
        console.log(err)
      }
      else {
        console.log('Success! ' + mongooseDocuments.length + ' documents have been added.')
      }
    })
  }
})