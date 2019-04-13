const https = require('https');

const getMovieTitles = (substr) => {
  const getTitles = (substr, pageNumber, titles) => {
    https.get(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}&page=${pageNumber}`, (res) => {
      // console.log('statusCode:', res.statusCode);
      // console.log('headers:', res.headers);
      res.on('data', (chunk) => {
        const response = JSON.parse(chunk);

        // add retrieved titles to titles array.
        response.data.forEach((movie) => {
          titles.push(movie.Title);
        });

        // retrieve next page if more pages, else return gathered titles
        if (response.page < response.total_pages) {
          getTitles(substr, pageNumber + 1, titles);
        } else {
          titles.sort((a, b) => {
            if (a < b) return -1;
            if (b < a) return 1;
            return 0;
          });
          console.log(titles);
        }
      });
    }).on('error', (e) => {
      console.error(e);
    });
  };

  getTitles(substr, 1, []);
};

getMovieTitles('spiderman');
