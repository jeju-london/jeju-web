var express = require('express');
var passport = require('passport');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.isAuthenticated());
  var page = 'login';
  if(req.isAuthenticated()){
      page = 'index';
  }
  res.render(page, { title: 'Jeju' });
});

router.post('/login', passport.authenticate('local', {
    failureRedirect: '/test'
}), function (req, res) {
    res.redirect('/');
});

router.post('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;
