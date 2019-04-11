const https = require('https');

const getMovieTitles = (substr) => {
  const titles = [];
  const getTitles = (substr, pageNumber) => {
    https.get(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}`, (res) => {
      console.log('statusCode:', res.statusCode);
      console.log('headers:', res.headers);

      res.on('data', (d) => {
        const data = JSON.parse(d);
        data.data.forEach((movie) => {
          titles.push(movie.Title);
        });

        console.log(titles);
      });


    }).on('error', (e) => {
      console.error(e);
    });

  };


  getTitles(substr, 1);
}

getMovieTitles('spiderman');
