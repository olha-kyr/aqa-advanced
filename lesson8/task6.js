const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
let copiedNumbersList = numbersList.slice();
console.log(copiedNumbersList);

console.log(
  copiedNumbersList.sort(function (a, b) {
    return a - b;
  }),
);
