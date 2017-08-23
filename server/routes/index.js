var express = require('express');
var router = express.Router();

var Moment = require('../models/moment.js')
var User = require('../models/user.js')


/* GET moments. */
router.get('/mymoments', function (req, res, next) {
  Moment.find({}, null, { sort: { date: -1 } }).then(moments => {
    res.json(moments);
  });
});

/* Save a new moment. */
router.post('/mymoments', function (req, res, next) {
  let moment = new Moment({ text: req.body.text });
  moment.save((err, newMoment) => {
    res.json({ data: newMoment, err: err })
  })

});

/* Edit a moment. */
router.put('/mymoments/:mymomentId', function (req, res, next) {
  let mymomentId = req.params.mymomentId;
  Moment.findById(mymomentId, function (err, moment) {
    if (err) next(err);
    else {
      moment.text = req.body.text;
      moment.save((updatedErr, updatedMoment) => {
        res.json({ data: updatedMoment, err: updatedErr })
      })
    }
  })
});

/* Delete a moment. */
router.delete('/mymoments/:mymomentId', function (req, res, next) {
  let mymomentId = req.params.mymomentId;
  Moment.findByIdAndRemove(mymomentId, function (err, doc) {
    console.log(arguments)
    if (err) next(err);
    else {
      res.json(doc)
    }
  })
});

module.exports = router;