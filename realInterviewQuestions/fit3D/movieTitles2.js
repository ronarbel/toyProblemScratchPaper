const https = require('https');

const getMovieTitles = (substr) => {

  const getTitles = (substr, pageNumber, titles) => {
    https.get(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}&page=${pageNumber}`, (res) => {
      console.log('statusCode:', res.statusCode);
      console.log('headers:', res.headers);

      res.on('data', (chunk) => {
        const response = JSON.parse(chunk);
        console.log(response);

        // add retrieved titles to titles array.
        response.data.forEach((movie) => {
          titles.push(movie.Title);
        });

        // retrieve next page if more pages, else return gathered titles
        if (response.page < response.total_pages) {
          getTitles(substr, pageNumber + 1, titles);
        } else {
          return titles;
        }
      });
    }).on('error', (e) => {
      console.error(e);
    });
  };


  getTitles(substr, 1, []);
};

getMovieTitles('spiderman');
