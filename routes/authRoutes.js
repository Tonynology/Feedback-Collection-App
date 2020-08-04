//these are route handlers
//app.get is creating a new route handler
const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
     passport.authenticate('google'),
     (req, res) => {
       res.redirect('/surveys');
     }
   );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => { //req is incomming request, res is outgoing result
    res.send(req.user);
  });

};
