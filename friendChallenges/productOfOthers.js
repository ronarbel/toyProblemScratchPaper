// have array of nums, return array where every number is the product of 
// every other num excluding itself

// [2, 4, 5] => [20, 10, 8]

// [1, 1, 1]
// [4, 1, 1]
// [20, 5, 1]

// [20, 5, 4]
// [20, 10, 8]



// [2, 4, 5, 3]

// [1, 2, 8, 40] -- left products
// [60, 15, 3, 1] -- right products

// [60, 30, 24, 40] -- total products




// -------- naive solution -------- //
// const productOfOthers = (a) => {
//   const totalProduct = a.reduce((acc, val) => acc * val);
//   for (let i = 0; i < a.length; i += 1) {
//     a[i] = totalProduct / a[i];
//   }
//   return a;
// };




const productOfOthers = (a) => {

};

console.log(productOfOthers([2, 4, 5]));
