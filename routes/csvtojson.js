var csvFilePath = './data/region/gender_age/amount_atime.csv';
var csv = require('csvtojson');

var getRegionCsvtoJson = function () {
    var regionJsonObj = {
        genderAge_amountAtime : {}
    };
    csv()
        .fromFile(csvFilePath)
        .on('json', function (jsonObj) {
            regionJsonObj.genderAge_amountAtime = jsonObj;
        })
        .on('done', function (error) {
            console.log('starat:', regionJsonObj);
            return regionJsonObj;
        });
}

module.exports = (function () {
    var data = {};
    data.region = [];

    csv()
        .fromFile(csvFilePath)
        .on('json', function (jsonObj) {
            data.region.push(jsonObj);
        })
        .on('done', function (error) {

        });

    return data;
})();
