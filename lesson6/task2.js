function isPersonAdultIfCondition(age) {
  if (age >= 18) {
    return true;
  } else return false;
}

console.log(isPersonAdultIfCondition(25));
console.log(isPersonAdultIfCondition(15));

//with ternar operator

function isPersonAdultTernaryOperator(age) {
  return age >= 18 ? true : false;
}

console.log(isPersonAdultTernaryOperator(15));
console.log(isPersonAdultTernaryOperator(25));
