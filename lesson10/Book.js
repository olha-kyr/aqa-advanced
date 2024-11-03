class Book {
  constructor(name, author, published) {
    this.name = name;
    this.author = author;
    this.published = published;
  }

  getInfo() {
    return `'${this.name}' book was written by ${this.author} and printed in ${this.published} year`;
  }

  printInfo() {
    console.log(this.getInfo());
  }
}

let domontovich = new Book("Girl with bear", "V.Domontovich", 1928);
let pidmohilniy = new Book("The City", "V.Pidmohilniy", 1928);

domontovich.printInfo();
pidmohilniy.printInfo();
