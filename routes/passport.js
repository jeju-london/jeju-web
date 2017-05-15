var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

module.exports = function () {
    passport.serializeUser(function (user, done) {
        console.log(user);
        done(null, user);
    });

    passport.deserializeUser(function (user, done) {
        console.log(user);
        done(null, user);
    });

    passport.use(new LocalStrategy({
            usernameField : 'userid',
            passwordField : 'password',
            passReqToCallback : true
        }
        ,function(req,userid, password, done) {
            if(userid=='hello@daum.net' && password=='1'){
                var user = { 'userid':'hello',
                    'email':'hello@world.com'};
                return done(null,user);
            }else{
                return done(null,false);
            }
        }
    ));
};

