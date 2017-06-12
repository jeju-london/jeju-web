var csv = require('csvtojson');

var csvRegionGenderAgePath = './data/region/gender_age/';
var csvRegionGenderAgeFileList = ['amount_atime.csv', 'use_times.csv', 'use_time_rate.csv', 'total_amount.csv', 'total_amount_rate.csv', 'total_users.csv', 'total_user_rate.csv', 'amount_aperson.csv'];

var csvPlayGroundPath = './data/play_ground/';
var csvPlayGroundFileList = ['play_ground.csv','schedule.csv'];

module.exports = (function () {
    var data = {};
    data.region = {
        gender_age: {
            amount_atime: [],
            use_times: [],
            use_time_rate: [],
            total_amount: [],
            total_amount_rate: [],
            total_users: [],
            total_user_rate: [],
            amount_aperson: []
        }
    };

    data.play_ground = {
        play_ground: [],
        schedule: []
    };


    var fileIdx = 0;
    var getPlayGroundData = function () {

        if(csvPlayGroundFileList.length-1 >= fileIdx){
            var playGroundDataField = csvPlayGroundFileList[fileIdx].replace('.csv', '');

            csv()
                .fromFile(csvPlayGroundPath + csvPlayGroundFileList[fileIdx])
                .on('json', function (jsonObj) {
                    eval('data.play_ground.'+playGroundDataField+'.push(jsonObj)');
                })
                .on('done', function (err) {
                    if(csvPlayGroundFileList.length-1 >= fileIdx) {
                        fileIdx++;
                        getPlayGroundData(fileIdx);
                        console.log('load finish: /play_ground/'+playGroundDataField);
                    }

                })

        }

    };

    getPlayGroundData();

    return data;
})();
