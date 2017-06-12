var express = require('express');
var passport = require('passport');
var fetch = require('node-fetch');
var csvtojsonjs = require('./csvtojson');
var router = express.Router();

/* GET home page. */
router.get('/playGround', function(req, res, next) {
    console.log('region:', csvtojsonjs.play_ground);
    res.json({result: csvtojsonjs.play_ground});
});

router.get('/schedule', function(req, res, next) {
    var stadium = req.query.stadium;
    var date = req.query.date;
    var totalSchedule = csvtojsonjs.play_ground.schedule;

    var resultSchedule = [];
    for(var idx in totalSchedule){
        if(stadium == totalSchedule[idx].name && date == totalSchedule[idx].date){
            resultSchedule.push(totalSchedule[idx]);
        }
    }

    console.log('schedule:', resultSchedule);
    res.json({result: resultSchedule});
});

router.get('/weather', function(req, res, next) {
    var wx = req.query.wx;
    var wy = req.query.wy;

    var date = new Date();
    var datetxt = date.yyyymmdd();
    var time = (date.getHours()>9 ? '' : '0') + date.getHours();

    fetch('http://newsky2.kma.go.kr/service/SecndSrtpdFrcstInfoService2/ForecastSpaceData?serviceKey=EtMOFLS%2FDkDlmRz8ZWvK54XdQ97UuudJGAPZx6hSk%2FyLH0YOEUrJEeePKhFZ3gJjioYrzc54PWpyFsSY4oOoCA%3D%3D&base_date='+datetxt+'&base_time=0200&nx='+wx+'&ny='+wy+'&numOfRows=1000&pageSize=100&pageNo=1&startPage=1&_type=json')
        .then(function(res) {
            return res.json();
        }).then(function(json) {
        console.log(json);
        res.json(json);
    });

});


Date.prototype.yyyymmdd = function() {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();

    return [this.getFullYear(),
        (mm>9 ? '' : '0') + mm,
        (dd>9 ? '' : '0') + dd
    ].join('');
};

module.exports = router;

