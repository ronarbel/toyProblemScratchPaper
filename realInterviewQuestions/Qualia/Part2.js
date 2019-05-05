const https = require('https');
const readline = require('readline');

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

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What book title would you like to find? Enter ISBN: ', (answer) => {
  getTitle(answer);

  rl.close();
});

// getTitle(9780545010221); Harry Potter and the Deathly Hallows
