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

class EBook extends Book {
  constructor(name, author, published, formatFile) {
    super(name, author, published);
    this.formatFile = formatFile;
  }

  getInfo() {
    return super.getInfo() + ` and in ${this.formatFile} format`;
  }
}

let ebook1 = new EBook("testName", "testAuthor", 2024, ".pfd");
ebook1.printInfo();
