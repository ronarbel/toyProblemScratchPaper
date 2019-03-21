// What is a callback? Can you show an example using one?

const addTwo = (value) => {
  console.log(value + 2);
};

const f1 = (value, func) => {
  console.log(value);
  func(value);
};

f1(2, addTwo);

// Functions passed in as arguments to other functions.
// Often used for async operations, but not always.
// Simple sync examples include array.map(callback)
