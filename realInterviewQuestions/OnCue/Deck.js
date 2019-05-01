const _ = require('lodash');

/* 
Your previous Plain Text content is preserved below:

Write a class to implement a deck of cards, and the methods to print and shuffle the deck of cards. 52 cards, 4 suits (hearts, diamonds, spades, clubs), 13 cards (2-10, J, Q, K, A) each suit


 */

class Deck {
  constructor () {
    this.deck = [];
  }

  buildDeck() {
    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    const suites = ['heats', 'diamonds', 'spades', 'clubs'];

    for (let i = 0; i < 13; i += 1) {
      for (let j = 0; j < 4; j += 1) {
        const card = {};
        card.value = values[i];
        card.suit = suites[j];

        this.deck.push(card);
      }
    }
  }

  print() {
    for (let i = 0; i < this.deck.length; i += 1) {
      console.log(this.deck[i]);
    }
  }

  shuffle(n) {
    for (let i = 0; i < n; i += 1) {
      const firstIdx = Math.floor(Math.random() * 51);
      const secondIdx = Math.floor(Math.random() * 51);

      const firstVal = this.deck.slice(firstIdx, firstIdx + 1);

      this.deck[firstIdx] = this.deck[secondIdx];
      this.deck[secondIdx] = firstVal[0];
    }
  }
}

const deck1 = new Deck();

deck1.buildDeck();
deck1.shuffle(100);
deck1.print();
