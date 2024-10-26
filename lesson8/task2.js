let initialArray = [1, 2, 3, 4, 5];
let multipliedInitialArray = initialArray.map(
  (item) => item * initialArray.indexOf(item)
);

console.log(multipliedInitialArray);
