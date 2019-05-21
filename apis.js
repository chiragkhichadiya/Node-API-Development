var request = require('request');
var url = require('url');

exports.exec = function (req, output) {
    var urlParams = url.parse(req.url, true);
    switch (urlParams.pathname) {
        case "/countries":
            getCountries(urlParams.query.searchby, urlParams.query.query, output);
            break;
        default:
            output.end(JSON.stringify({"flag": false, "message": "Invalid request"}));
            break;
    }
};

function getCountries(searchBy, queryStr, output) {
    let res = {};
    let url = "https://restcountries.eu/rest/v2/all";
    switch (searchBy) {
        case "name":
            url = "https://restcountries.eu/rest/v2/name/" + queryStr;
            break;
        case "currency":
            url = "https://restcountries.eu/rest/v2/currency/" + queryStr;
            break;
        case "capital":
            url = "https://restcountries.eu/rest/v2/capital/" + queryStr;
            break;
        case "language":
            url = "https://restcountries.eu/rest/v2/lang/" + queryStr;
            break;
        case "region":
            url = "https://restcountries.eu/rest/v2/region/" + queryStr;
            break;
        case "regionalbloc":
            url = "https://restcountries.eu/rest/v2/regionalbloc/" + queryStr;
            break;
        default :
            break;
    }
    request(url, function (error, response, body) {
        if (response && response.statusCode == 200) {
            res["flag"] = true;
            res["data"] = JSON.parse(body);
        } else {
            res["flag"] = false;
            res["message"] = error;
        }
        output.end(JSON.stringify(res));
        //console.log('error:', error); // Print the error if one occurred
        //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        //console.log('body:', body); // Print the HTML for the Google homepage.
    });
}