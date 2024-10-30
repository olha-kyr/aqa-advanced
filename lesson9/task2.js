let book = { title: "1984", author: "D.Orvel", year: 2024 };
console.log(book);

book.author = "D.Orvell";
console.log(book);

let { title, author } = book;
console.log(title);
console.log(author);
