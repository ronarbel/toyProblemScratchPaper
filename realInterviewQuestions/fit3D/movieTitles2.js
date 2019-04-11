const https = require('https');

https.get('https://jsonmock.hackerrank.com/api/movies/search/?Title=spiderman', (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });

}).on('error', (e) => {
  console.error(e);
});
