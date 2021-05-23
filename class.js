// Aama class maate theory + exercise4

// CLass is a blueprints
// Class badhi attributes , functions ,methods
class Employee{
    constructor(name,experience,department){
        this.name=name;
        this.experience=experience;
        this.department=department;
    }
    slogan(){
        // this is a function
        return `I am ${this.name}`;
    }
    joiningYear(){
       return 2021-this.experience;
    }
    static add(a,b){
        return a+b;
    }
}
Anshul=new Employee('Anshul',9,'Product Manager Intern');

console.log(Anshul.joiningYear());
// static because e object na koi attributes ne kya le che 
// solely emnme thai sake che k
// Inheritance
class Programmer extends Employee{
    constructor(name,experience,department,language){
        super(name,experience,department);
        this.language=language;
    }
     favouriteLanguages(){
        if(this.language=='Python'){
            return 'Python';
        }
        else 
            return 'Javascript';
    }
    static div(a,b){
        return a*b;
    }
   
}
newprog=new Programmer('Hello',9,'CS','Python');
console.log(newprog);
console.log(newprog.favouriteLanguages());
// Exercise
// Create a library class , get Book List , issue book (book name, User ), return book(bookname), constructor
// Takes booklist as an argument

class library {
    constructor(user,booklist){
        this.booklist=booklist;
        this.user=user;
    }
    getBookList(){
        this.booklist.forEach(element=>{
            console.log(element);
        })
    }
    issueBook(BookName,user){
        if(this.user==user){
            booklist.append(this.BookName);
        }

    }
    returnBook(BookName){
        booklist.remove(this.BookName);

    }

}

// class Library {
//     constructor(bookList){
//         this.bookList = bookList;
//         this.issuedBooks = {};
//     }

//     getBookList(){
//         this.bookList.forEach(element => {
//             console.log(element);
//         });
//     }

//     issueBook(bookname, user){
//         if (this.issuedBooks[bookname] ==undefined){
//         this.issuedBooks[bookname] =  user;
//         }
//         else{
//             console.log("This book is already issued!");
//         }
//     }

//     returnBook(bookname){
//         delete this.issuedBooks[bookname];
//     }
// }

