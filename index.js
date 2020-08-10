const express = require('express');  // To get express, this syntax is common js module
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./models/Survey');
require('./services/passport');

//mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express(); //express의 펑션을 갖고 express app을 만든다.

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //30 days, milisecond
    keys: [keys.cookieKey] //array because be able to create multiple keys
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app); // app calls the function of first parenthesis
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if(process.env.NODE_ENV === 'production') {
  // Express will serve up prodection assets
  // like our main.js file, or main.css file.
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);

//http://localhost:5000/

//Mongoose is js library.
//Collection is in mongo DB
//one Model Class related to one collection and each model instance is related to one individual record
