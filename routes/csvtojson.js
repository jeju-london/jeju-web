var csv = require('csvtojson');

var csvRegionGenderAgePath = './data/region/gender_age/';
var csvRegionGenderAgeFileList = ['amount_atime.csv', 'use_times.csv', 'use_time_rate.csv', 'total_amount.csv', 'total_amount_rate.csv', 'total_users.csv', 'total_user_rate.csv', 'amount_aperson.csv'];

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

    var fileIdx = 0;
    var getRegionGenderAgeData = function () {
        var regionGenderAgeDataField = csvRegionGenderAgeFileList[fileIdx].replace('.csv', '');
        csv()
            .fromFile(csvRegionGenderAgePath + csvRegionGenderAgeFileList[fileIdx])
            .on('json', function (jsonObj) {
                eval('data.region.gender_age.'+regionGenderAgeDataField+'.push(jsonObj)');
            })
            .on('done', function (err) {
                if(csvRegionGenderAgeFileList.length > fileIdx+1){
                    fileIdx++;
                    console.log('load finish: /region/gender_age/'+regionGenderAgeDataField);
                    getRegionGenderAgeData(fileIdx);
                }
            })
    };
    getRegionGenderAgeData();

    return data;
})();
