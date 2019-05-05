const readline = require('readline');
const axios = require('axios');

const getTitle = (ISBN) => {
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${ISBN}`)
    .then((response) => {
      const { data } = response;
      const title = data.items[0].volumeInfo.title;

      console.log(title);
    })
    .catch(e => console.log(e));
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What book title would you like to find? Enter ISBN: ', (input) => {
  getTitle(input);

  rl.close();
});
