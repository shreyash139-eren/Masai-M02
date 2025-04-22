function Book(title,author){ 
    let obj={}
    obj.title=title
    obj.author=author
    obj.details=function(){
        console.log(`Book: ${this.title}, Author: ${this.author}`)
    }
    return obj
}

function createLibrary(){
    let obj={}
    obj.Books=[]
    obj.listBooks=function(){
        console.log(this.Books)
    }
    obj.addBook=function(Book){
        this.Books.push(Book)
        console.log(`${Book.title} added successfully!`)
    }
    obj.removeBook=function(title){
        for(let i=0;i<this.Books.length;i++){
           if(this.Books[i].title===title){
            this.Books.splice(i,1)
            console.log("Book removed successfully!")
            return
           }
        }
        console.log("Invalid title!")
    }
    obj.details=function(title){
        for(let i=0;i<this.Books.length;i++){
            if(title===this.Books[i].Book){
                console.log(this.Books[i])
                return
            }
        }
        console.log(`Book with title: ${title}, not found!`)
    }
    
    return obj
}
const library = createLibrary();

const book1 = Book("To Kill a Mockingbird", "Harper Lee");
const book2 = Book("1984", "George Orwell");

library.addBook(book1);
library.addBook(book2);

library.listBooks();
// Output:
// Title: To Kill a Mockingbird, Author: Harper Lee
// Title: 1984, Author: George Orwell

library.removeBook("1984");
library.listBooks();
// Output:
// Title: To Kill a Mockingbird, Author: Harper Lee


  