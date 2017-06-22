var express = require('express');
var passport = require('passport');
var csvtojsonjs = require('./csvtojson');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    //var page = 'login';
    var page = 'find';
    if(req.isAuthenticated()){
        page = 'find';
    }
    console.log('region:', csvtojsonjs.play_ground);
    res.render(page, { title: 'Jeju', tab: 'find', playGround: csvtojsonjs.play_ground });
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

