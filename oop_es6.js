class Book{
    constructor(title,author,year){
        this.title =title;
        this.author = author;
        this.year = year;
    }
    getSummary(){
        return `${this.title} was writen by ${this.author}
    in ${this.year}`;
    }
    static topBookStore(){
        return 'Barnes & Noble';
    }

}
// Magazine Subclass

class Magazine extends Book{
    constructor(title,author,year,month){
        super(title,author,year);
        this.month = month;
    }
    getMagazine(){
        console.log(this.title);
    }
}

// Instantiate Object
const book1 = new Book('Book one','John Doe',
'2014');

// Instantiate Magazine
const magazine1 = new Magazine('mag one','alex Doe',
'6123','Jul');


console.log(book1);
console.log(book1.getSummary());
console.log(Book.topBookStore());
console.log(magazine1);
console.log(magazine1.getSummary());
magazine1.getMagazine();