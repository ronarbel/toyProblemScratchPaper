process.stdin.resume();
process.stdin.setEncoding('utf-8');

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on('data', function (data) {
    __input_stdin += data;
});


const https = require('https');
/*
 * Complete the function below.
 * Use console.log to print the result, you should not return from the function.
 * Base url: https://jsonmock.hackerrank.com/api/movies/search/?Title=
 */
function getMovieTitles(substr) {
    https.request(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}`, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
        console.log(body);

    });
    // var options = {
    //     host: 'www.google.com',
    //     port: 443,
    //     path: '/upload',
    //     method: 'POST'
    // };

    // var req = https.request(options, function (res) {
    //     console.log('STATUS: ' + res.statusCode);
    //     console.log('HEADERS: ' + JSON.stringify(res.headers));
    //     res.setEncoding('utf8');
    //     res.on('data', function (chunk) {
    //         console.log('BODY: ' + chunk);
    //     });
    // });

    // req.on('error', function (e) {
    //     console.log('problem with request: ' + e.message);
    // });

    // // write data to request body
    // req.write('data\n');
    // req.write('data\n');
    // req.end();

}

process.stdin.on('end', function () {


  process.stdin.resume();
process.stdin.setEncoding('utf-8');

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on('data', function (data) {
    __input_stdin += data;
});


const https = require('https');
/*
 * Complete the function below.
 * Use console.log to print the result, you should not return from the function.
 * Base url: https://jsonmock.hackerrank.com/api/movies/search/?Title=
 */
function getMovieTitles(substr) {

    const titles = [];
    const getTitles = (page) => {
        const req = https.request(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}`, function (res) {
            console.log("statusCode: ", res.statusCode);
            console.log("headers: ", res.headers);

            res.on('data', function (d) {
                process.stdout.write(d);
            });
        });
        req.end();

        req.on('error', function (e) {
            console.error(e);
        });
        
    }
}

process.stdin.on('end', function () {