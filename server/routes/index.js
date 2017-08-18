var express = require('express');
var router = express.Router();

var Moment = require('../models/moment.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ text: "Welcome to a BomBomLife!" });
});

/* GET moments. */
router.get('/api/mymoments', function(req, res, next) {
  Moment.find({}, null, {sort: {date: -1}}).then(moments => {
    res.json(moments);
  });
});

/* Save a new moment. */
router.put('/api/mymoments', function(req, res, next) {
  let moment = new Moment({text: req.body.text});
  moment.save((err, newMoment) => {
    res.json({data: newMoment, err: err})
  })
  
});



module.exports = router;
