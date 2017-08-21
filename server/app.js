var express = require('express');
var path = require('path');
const favicon = require("serve-favicon");
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cors = require('cors');

var index = require('./routes/index');
const authRoutes = require('./routes/auth');
var app = express();

const passport = require("passport");
const User = require("./models/user");
const config = require("./config");
const { Strategy, ExtractJwt } = require("passport-jwt");

// view engine setup



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(favicon(path.join(__dirname, "public", "/images/buddha-grey.ico")));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', cors({ origin: 'http://localhost:8080' }));

// create the authentification strategy
passport.initialize();
// create the strategy for JWT
const strategy = new Strategy(
  {
    secretOrKey: config.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  },
  (payload, done) => {
    User.findById(payload.id).then(user => {
      if (user) {
        done(null, user);
      } else {
        done(new Error("User not found"));
      }
    });
  }
);
passport.use(strategy);

app.use('/', index);
app.use('/api', authRoutes);

// connect to Mongo database
mongoose.connect('mongodb://localhost/bombomlife');


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  console.log(err);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  });
});

module.exports = app;
