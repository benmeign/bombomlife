var express = require('express');
var router = express.Router();
const { ensureLoggedIn, ensureLoggedOut } = require("connect-ensure-login");
const { rightUser, authorizedUser } = require("../middlewares")

var Moment = require('../models/moment.js')
var User = require('../models/user.js')

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
    res.json({ data: newMoment, err: err })
  })
});

/* Edit a moment. */
router.post('/mymoments/:mymomentId', authorizedUser, function (req, res, next) {
  let mymomentId = req.params.mymomentId;
  Moment.findById(mymomentId, function (err, moment) {
    if (mymomentId.userId !== req.user._id) {
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
router.delete('/mymoments/:mymomentId', ensureLoggedIn(), function (req, res, next) {
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

module.exports = router;