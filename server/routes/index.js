var express = require('express');
var router = express.Router();
const { ensureLoggedIn, ensureLoggedOut } = require("connect-ensure-login");
const { rightUser, authorizedUser } = require("../middlewares")

var Moment = require('../models/moment.js')
var User = require('../models/user.js')
var Challenge = require('../models/challenge.js')

// MOMENTS//

/* GET moments. */
router.get('/users/mymoments', authorizedUser, function (req, res, next) {
  console.log(req.user)
  Moment.find({ userId: req.user._id }, null, { sort: { date: -1 } }).then(moments => {
    res.json(moments);
  });
});

/* Save a new moment. */
router.post('/users/mymoments', authorizedUser, function (req, res, next) {
  let moment = new Moment({ text: req.body.text, userId: req.user._id });
  moment.save((err, newMoment) => {
    if (err) return next(err)
    res.json(newMoment)
  })
});

/* Edit a moment. */
router.post('/mymoments/:mymomentId', authorizedUser, function (req, res, next) {
  let mymomentId = req.params.mymomentId;
  Moment.findById(mymomentId, function (err, moment) {
    if (!moment.userId.equals(req.user._id)) {
      var err = new Error('Not authorized');
      err.status = 401;
      next(err);
    } else {
      if (err) next(err);
      else {
        moment.text = req.body.text;
        moment.save((updatedErr, updatedMoment) => {
          res.json({ data: updatedMoment, err: updatedErr })
        })
      }
    }
  })
});

/* Delete a moment. */
router.delete('/mymoments/:mymomentId', authorizedUser, function (req, res, next) {
  let mymomentId = req.params.mymomentId;
  Moment.findById(mymomentId, function (err, moment) {
    // console.log(moment)
    // console.log(req.user)
    if (moment && moment.userId.equals(req.user._id)) {
      moment.remove((err) => {
        if (err) return next(err)
        res.json(moment)
      })
    } else {
      var err = new Error('Not authorized');
      err.status = 401;
      next(err);
    }
  })
})



// CHALLENGES //

/* Load a challenge for a user */
router.get('/users/challenge', authorizedUser, function (req, res, next) {
  Challenge.findById(req.user.runningChallenge).then(challenge => {
    res.json(challenge);
  });
})

router.get('/users/mymoments', authorizedUser, function (req, res, next) {
  console.log(req.user)
  Moment.find({ userId: req.user._id }, null, { sort: { date: -1 } }).then(moments => {
    res.json(moments);
  });
});

/* Load a challenge for a user */
function assignNewChallenge(user) {
  return Challenge.findOne({
    _id: {
      $nin:
      user.challengesSucceeded.concat(user.challengesFailed).concat(user.challengesSkipped)
    }
  }).then(challenge => {
    user.runningChallenge = challenge._id
    return user.save()
  })
};

/* Accept a challenge */
router.post('/users/challenge/accept', authorizedUser, function (req, res, next) {
  req.user.isChallengeAccepted = true;
  req.user.save().then(user => {
    res.json(user);
  });
})

/* Add a challenge to succeeded challenges for a user */
router.post('/users/challenge/succeed', authorizedUser, function (req, res, next) {
  if (!req.user.isChallengeAccepted) {
    var err = new Error('Challenge not accepted yet');
    err.status = 403;
    next(err);
  } else {
    req.user.challengesSucceeded.push(req.user.runningChallenge);
    req.user.isChallengeAccepted = false;
    assignNewChallenge(req.user).then(user => {
      res.json(user);
    });
  }
});

/* Add a challenge to failed challenges for a user */
router.post('/users/challenge/fail', authorizedUser, function (req, res, next) {
  if (!req.user.isChallengeAccepted) {
    var err = new Error('Challenge not accepted yet');
    err.status = 403;
    next(err);
  } else {
    req.user.challengesFailed.push(req.user.runningChallenge);
    req.user.isChallengeAccepted = false;
    assignNewChallenge(req.user).then(user => {
      res.json(user);
    });
  }
});

/* Add a challenge to skipped challenges for a user */
router.post('/users/challenge/skip', authorizedUser, function (req, res, next) {
  req.user.challengesSkipped.push(req.user.runningChallenge);
  assignNewChallenge(req.user).then(user => {
    res.json(user);
  });
});

module.exports = router;