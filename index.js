class Library {
    bookList = [];
    readerList = [];
    
    addbook(book) {
        this.bookList.push(book);
    }

    removeBookByTitle(bookTitle) {
        const index = this.bookList.findIndex(book => book.title === bookTitle);
        if (index !== -1) {
            this.bookList.splice(index, 1);
            return `Removed ${bookTitle} from the library`;
        }
        return `Book ${bookTitle} not found in the library`;
    }
    
    listBooks() {
        if (this.bookList.length === 0) {
            return "The library is empty.";
        }
        return this.bookList.map(book => book.toString()).join('\n');
    }
    
    findBookByAuthor(authorName) {
        const foundBooks = this.bookList.filter(book => book.author.toLowerCase() === authorName.toLowerCase());
        return foundBooks.length > 0 ? foundBooks.map(book => book.toString()).join('\n') : `No books found by ${authorName}`;
    }
    
}


class Book {
    name = '';
    author = '';
    year = 0;
    genre = '';

    constructor(name, author, year, genre) {
        this.name = name;
        this.author = author;
        this.year = year;
        this.genre = genre;
    }

    addbook(library, book) {
        library.push(book);
    }

    removeBook(library, bookTitle) {
        const index = library.findIndex(book => book.title === bookTitle);
        if (index !== -1) {
            library.splice(index, 1);
            return `Removed ${bookTitle} from the library`;
        }
        return `Book ${bookTitle} not found in the library`;
    }
    
    listBooks(library) {
        if (library.length === 0) {
            return "The library is empty.";
        }
        return library.map(book => book.toString()).join('\n');
    }
    
    findBookByAuthor(library, authorName) {
        const foundBooks = library.filter(book => book.author.toLowerCase() === authorName.toLowerCase());
        return foundBooks.length > 0 ? foundBooks.map(book => book.toString()).join('\n') : `No books found by ${authorName}`;
    }
    
}

const library = new Library();

const book1 = new Book('Война и мир', 'Лев Николаевич Толстой', 1863, 'Classic');
const book2 = new Book('Сияние', 'Стивен Кинг', '1977', 'Ужасы');
const book3 = new Book('Извне', 'Говард Филлипс Лавкрафт', '1934', 'Ужасы');

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

console.log('Books in the library:');
console.log(library.listBooks());

console.log(library.removeBook('Извне'));
console.log('Books in the library after removal:');
console.log(library.listBooks());