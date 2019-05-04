const things = {
  animals: {
    cats: {
      average_lifespan: 13,
      colors: {
        gray: 20,
        blue: 1,
        black: 10,
      },
      type: 'mammal',
    },
    dogs: {
      average_lifespan: 10,
      colors: {
        golden: 5,
        black: 10,
        gray: 2,
      },
      type: 'mammal',
    },
    turtles: {
      average_lifespan: 40,
      type: 'reptile',
    },
  },
  cartoons: {
    'mickey mouse': 1,
    'inside out': 1,
    up: 1,
  },
};

const getResults = (data, query) => {
  if (!(data instanceof Object)) return data;

  const parameters = query.split('.');
  const firstParameter = parameters[0];
  const remainingParameters = parameters.slice(1).join('.');

  if (firstParameter !== '*') {
    const deeperData = data[firstParameter];

    return getResults(deeperData, remainingParameters);
  }
  if (firstParameter === '*') {
    const res = [];
    const keys = Object.keys(data);
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      const deeperData = data[key];
      const queryResult = getResults(deeperData, remainingParameters);

      res.push(queryResult);
    }
    return res;
  }
};

console.log(getResults(things, 'animals.cats.colors.gray')); // 20;
console.log(getResults(things, 'animals.*.type'));
