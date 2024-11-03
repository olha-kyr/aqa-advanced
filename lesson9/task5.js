let users = [
  { name: "Inna", email: "innaEmail@test.com", age: 30, city: "Kharkiv" },
  { name: "Petro", email: "petroEmail@test.com", age: 15, city: "Odesa" },
  { name: "Irina", email: "irinaEmail@test.com", age: 10, city: "Kyiv" },
];

for (let person of users) {
  let value = Object.values(person);
  console.log(value);

  let { name, email, age, city } = person;
  console.log(`name: ${name}, email: ${email}, age: ${age}, city: ${city}`);
}
