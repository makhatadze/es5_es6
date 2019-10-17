//// ES5
// Constructor
function Book(title,author,year){
    this.title = title;
    this.author = author;
    this.year = year;
}

// getSummary
Book.prototype.getSummary = function(){
    return `${this.title} was writen by ${this.author}
    in ${this.year}`;
};

const book1 = new Book('Book one','John Doe',
'2014');

//console.log(book1.getSummary());

// Magazine Constructor
function Magazine(title,author,year,month){
    Book.call(this,title,author,year);
    this.month = month;
}

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazine Object

const magazine1 = new Magazine(
    'Mag one','John doe','2018','Jan');
console.log(magazine1);
console.log(magazine1.getSummary());