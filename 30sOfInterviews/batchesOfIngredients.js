const batchesOfIngredients = (recipe, ingredients) => {
  let minBatches = Infinity;
  for (let item in recipe) {
    let itemBatches = Math.floor(ingredients[item] / recipe[item]);
    minBatches = Math.min(itemBatches, minBatches);
  }
  return minBatches;
};

console.log(batchesOfIngredients(
  { milk: 100, butter: 50, flour: 5 },
  { milk: 132, butter: 48, flour: 51 },
));

console.log(batchesOfIngredients(
  { milk: 100, butter: 50, cheese: 10 },
  { milk: 198, butter: 52, cheese: 10 },
));

console.log(batchesOfIngredients(
  { milk: 2, sugar: 40, butter: 20 },
  { milk: 5, sugar: 120, butter: 500 },
));
