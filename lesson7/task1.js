//task1

function handleNum(num, evenCallback, oddCallback) {
  num % 2 === 0 ? evenCallback() : oddCallback();
}

function handleEven() {
  console.log("number is even");
}

function handleOdd() {
  console.log("number is odd");
}

handleNum(7, handleEven, handleOdd);
