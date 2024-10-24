// task3

function divide(numerator, denominator) {
  function isNotNumber(num) {
    return typeof num !== "number";
  }

  if (denominator === 0) {
    throw Error("Denominator equals 0");
  }
  if (isNotNumber(numerator) || isNotNumber(denominator)) {
    throw Error("Numerator or denomerator is not a number");
  }
  return numerator / denominator;
}

let result = divide(3, 4);

try {
  divide(7, 0);
} catch (error) {
  console.error("Dividing by 0 check error:", error.message);
} finally {
  console.log("Job's done!");
}

try {
  divide("test", 2);
} catch (error) {
  console.error("Non-number check error:", error.message);
} finally {
  console.log("Job's done!");
}

console.log(result);
