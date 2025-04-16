function Book(title,author){
    let obj={}
    obj.title=title
    obj.author=author
    obj.details=function(a){
    }
    return obj
}

function createLibrary(){
    let obje={}
    obje.books=[]
    obje.AddBook=function(book){
        books.push(book)
    }
}
const book1 = Book("To Kill a Mockingbird", "Harper Lee")
