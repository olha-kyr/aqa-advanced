let person = {
  firstName: "Jon",
  lastName: "Smith",
  age: 35,
};

person.email = "jonTestEmail@gmail.com";

delete person.age;
console.log(person);
