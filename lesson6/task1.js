//function declaration

function calculateRectangleAreaDeclaration(width, height) {
  let rectangleArea = width * height;
  return rectangleArea;
}

let result = calculateRectangleAreaDeclaration(5, 10);
console.log(result);

// function expression

let calculateRectangleAreaExpression = function (width, height) {
  let rectangleAreaExpression = width * height;
  return rectangleAreaExpression;
};

let result1 = calculateRectangleAreaExpression(1, 8);
console.log(result1);

//arrow function

let calculateRectangleAreaArrow = (width, height) => width * height;
let result2 = calculateRectangleAreaArrow(3, 6);
console.log(result2);
