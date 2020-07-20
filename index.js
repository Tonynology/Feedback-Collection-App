const express = require('express');  // To get express, this syntax is common js module
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //30 days, milisecond
    keys: [keys.cookieKey] //array because be able to create multiple keys
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app); // app calls the function of first parenthesis

const PORT = process.env.PORT || 5000;
app.listen(PORT);

//http://localhost:5000/

//Mongoose is js library.
//Collection is in mongo DB
//one Model Class related to one collection and each model instance is related to one individual record
