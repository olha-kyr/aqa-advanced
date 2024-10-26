let numbers = [2, -5, 0, 7, -3, 0, 10, -8];
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] > 0) {
    positiveCount++;
  } else if (numbers[index] < 0) {
    negativeCount++;
  } else if (numbers[index] === 0) {
    zeroCount++;
  }
}

console.log("Positive quontity: " + `${positiveCount}`);
console.log("Negative quontity: " + `${negativeCount}`);
console.log("Zero quontity: " + `${zeroCount}`);
