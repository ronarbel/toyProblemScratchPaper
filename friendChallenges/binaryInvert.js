/* eslint-disable */
const binaryInvert = (n) => { // Let's say n === 5
  // Step 1: we want to find the highest multiplier (2^?) that is <= n

  // Why? If we move to the 4th position in binary, our multipier is 2^3 or 8, which is beyond n.
  // If we want to represent 675, we can't start with 7 in the 100s place, because its already too big.
  // adding 70 and 5 to 700 only takes you farther away from 675.
  // 6 is the largest 100s number that is less than 675.

  // To figure out what multiplier to start with, multiply by 2 until right under or at n. 
  let multiplier = 1;
  while (multiplier * 2 <= n) {
    multiplier *= 2;
  }
  // Multiplier should now === 4

  // We'll store our binary values in an array (random ex: [1, 0, 1, 1, 0, 0])
  const binary = [];

  // Step 2: now we'll generate our binary values from left to right based on input n and the current multiplier
  while (multiplier >= 1) {

    // If the current value of n is greater than the multiplier (first loop: 5 > 4)
    // we will push a 1 into the storage array^, and subtract the multiplier
    // (after first loop: n === 1, multiplier === 2) < see bottom of while loop
    if (n / multiplier >= 1) {
      binary.push(1);
      n -= multiplier;

    // if n is less than the current multiplier (second loop: 1 < 2)
    // push a 0 to the storage array and don't decrement n.
    } else {
      binary.push(0);
    }

    // every loop, divide multiplier by 2 to move from 2^3 => 2^2 => 2^1, aka each binary position.
    multiplier /= 2;
  }

  // So we went n === 5, multiplier === 4
  // >> push 1 into array, n = 5 - 4 = 1, multiplier = 4 / 2 = 2

  // n === 1, multipler === 2
  // >> push 0 into array, n = 1, multiplier = 2 / 2 = 1;

  // n === 1, multiplier === 1
  // >> push 1 into array, n = 0, multiplier = 1 / 2 = 0.5

  // multiplier is not >= 1, exit while loop.

  // At this point, our binary array is now [1, 0, 1] aka 5

  // ---------------------------------------------- //
  // Create a new array, for each element of binary array, if e was 1 return 0 else return 1
  const invertedBinary = binary.map(e => e ? 0 : 1);

  let result = 0;
  for (let i = 0; i < invertedBinary.length; i += 1) {
    result += invertedBinary[i] * Math.pow(2, invertedBinary.length - 1 - i);
  }

  return result;
};

console.log(binaryInvert(5)); // 2
