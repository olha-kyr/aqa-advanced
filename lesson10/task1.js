class Book {
  constructor(name, author, published) {
    this._name = name;
    this._author = author;
    this._published = published;
  }

  static findOldestPublishedYear(...books) {
    let publishedDates = books.map((book) => book.published);
    return Math.min(...publishedDates);
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (name === "") {
      throw new Error("Invalid value received for name");
    }
    this._name = name;
  }

  get author() {
    return this._author;
  }

  set author(author) {
    if (author === "") {
      throw new Error("Invalid value for author");
    }
    this._author = author;
  }

  get published() {
    return this._published;
  }

  set published(published) {
    if (published === "") {
      throw new Error("Invalid value for published");
    }
    this._published = published;
  }
}

class EBook extends Book {
  constructor(name, author, published, formatFile) {
    super(name, author, published);
    this._formatFile = formatFile;
  }
  get formatFile() {
    return this._formatFile;
  }

  set formatFile(formatFile) {
    if (formatFile === "") {
      throw new Error("Invalid value for formatFile");
    }
  }

  static exampleOfBook(book, formatFile) {
    return new EBook(book.name, book.author, book.published, formatFile);
  }
}

let book = new Book("3 bears", "Sharl Piero", 1999);
let book1 = new Book("Lafkraft", "testA", 1996);
console.log(book.name);

book.name = "Pinoccio";
console.log(book.name);

let eBook = new EBook("Spelling", "testAuthor", 1911);
let eBook1 = new EBook("Lafkraft_new", "testAuthor1", 2024);

// home work requirement 4
console.log(Book.findOldestPublishedYear(book, book1, eBook, eBook1));

// home work requirement 5
console.log(EBook.exampleOfBook(book, ".pdf"));
