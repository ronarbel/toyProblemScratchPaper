const https = require('https');

const getTitle = (ISBN) => {
  https.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${ISBN}`, (res) => {
    // console.log('statusCode:', res.statusCode);
    // console.log('headers:', res.headers);

    let rawData = '';
    res.on('data', (d) => {
      rawData += d;
    });

    res.on('end', () => {
      const parsedData = JSON.parse(rawData);

      const bookTitle = parsedData.items[0].volumeInfo.title;
      console.log(bookTitle);
    });
  }).on('error', (e) => {
    console.error(e);
  });
};

getTitle(9780545010221);
