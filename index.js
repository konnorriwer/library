class Library {
    bookList = [];
    readerList = [];

}


class Book {
    name = '';
    author = '';
    year = 0;


    constructor(name, author, year) {
        this.name = name;
        this.author = author;
        this.year = year;
    }
}



let book = new Book('Война и мир', 'Лев Николаевич Толстой', 1863);
console.log(book);