let per1Name = "Olha";
let per2Name = "Roman";

let greeting1 = "Hello" + "," + " " + per1Name + " " + "and" + " " + per2Name + "!"; // concatination version 1
console.log(greeting1);

let greeting2 = "Hello" + "," + " " + per1Name.concat(" ", "and", " ", per2Name + "!"); // concatination version 2
console.log(greeting2);

let greeting3 = `Hello, ${per1Name} and ${per2Name}!`; //template string
console.log(greeting3);
