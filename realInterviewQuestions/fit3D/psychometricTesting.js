process.stdin.resume();
process.stdin.setEncoding('utf-8');

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on('data', function(data) {
    __input_stdin += data;
});

/*
 * Complete the function below.
 */
function jobOffers(scores, lowerLimits, upperLimits) {
    const res = [];
    for (let i = 0; i < lowerLimits.length; i += 1) {
        let validCandidates = 0;
        for (let j = 0; j < scores.length; j += 1) {
            if (scores[j] >= lowerLimits[i] && scores[j] <= upperLimits[i]) {
                validCandidates += 1;
            }
        }
        res.push(validCandidates);
    }

    return res;
}
var fs = require('fs');