/*
Write a function that can create node classes:

var NodeA = createNodeType(“A”)
nodeA = new NodeA()
nodeA.printType(“hello”) //A hello

*/

const createNodeType = type => (
  class Node {
    constructor() {
      this.type = type;
    }

    printType(input) {
      console.log(this.type, input);
    }
  }
);

const NodeA = createNodeType('A');
const nodeA = new NodeA();
nodeA.printType('hello');
