//function declaration

function calculateRectangleArea(width, height) {
  let rectangleArea = width * height;
  return rectangleArea;
}

let result = calculateRectangleArea(5, 10);
console.log(result);

// function expression

let calculateRectangleArea1 = function (width, height) {
  let rectangleArea1 = width * height;
  return rectangleArea1;
};

let result1 = calculateRectangleArea1(1, 8);
console.log(result1);

//arrow function

let calculateRectangleArea2 = (width, height) => width * height;
let result2 = calculateRectangleArea2(3, 6);
console.log(result2);
