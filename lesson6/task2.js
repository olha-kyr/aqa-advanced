function isPersonAdult(age) {
  if (age >= 18) {
    return true;
  } else return false;
}

console.log(isPersonAdult(25));
console.log(isPersonAdult(15));

//with ternar operator

function isPersonAdult1(age1) {
  return age1 >= 18 ? true : false;
}

console.log(isPersonAdult1(15));
console.log(isPersonAdult1(25));
