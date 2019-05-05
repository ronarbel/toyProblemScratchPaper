const readline = require('readline');
const axios = require('axios');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What book title would you like to find? Enter ISBN: ', (answer) => {
  getTitle(answer);

  rl.close();
});
