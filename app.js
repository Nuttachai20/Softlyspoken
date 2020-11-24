var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./db/mongoose')
const multer = require('multer');
/**
 * frond-end
 */
var index = require('./routes/frontend/index');
var users = require('./routes/frontend/users');
var profile = require('./routes/frontend/profile');
var login = require('./routes/frontend/login');
var seemore = require('./routes/frontend/seemore');
var signup = require('./routes/frontend/signup');
var edit = require('./routes/frontend/edit');
var change = require('./routes/frontend/changepassword');
var track = require('./routes/frontend/track');
var detail = require('./routes/frontend/detail');
  
/**
 * backend 
 */
var userRouter = require('./routes/backend/user');
var trackRouter = require('./routes/backend/track')
var auth = require('./middleware/auth')


var app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
// const bodyParser = require('body-parser')

// view engine setup
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + "/public"));


app.use('/', index);
app.use('/users', users);
app.use('/profile', profile);
app.use('/login', login);
app.use('/seemore', seemore);
app.use('/signup', signup);
app.use('/editprofile', edit);
app.use('/changepassword', change);
app.use('/tracks', track);
app.use('/detail', detail);

     /**
      * backend route
      */
app.use(trackRouter);
app.use(userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
