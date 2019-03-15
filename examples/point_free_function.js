

//Simple function
let books = [
    {title: "Harry Potter", authorID: 0, name: "J.K. Rowling", type: "F"},
    {title: "The Lord of the Rings", authorID: 1, name: "J.R.R. Tolkien", type: "F"},
    {title: "The Great Gatsby", authorID: 2, name: "F.Scott Fitzgerald", type: "D"},
    {title: "Pride and Prejudice", authorID: 3, name: "Jane Austen", type: "D"},
    {title: "JavaScript: The Good Parts", authorID: 4, name: "Douglas Crockford", type: "T"},
    {title: "Head First Design Patterns", authorID: 5, name: "Eric Freeman", type: "T"},
    {title: "Kubernetes: Up & Running", authorID: 6, name: "Kelsey Hightower", type: "T"},
    {title: "Pro ASP.NET MVC 5", authorID: 7, name: " Adam Freeman", type: "T"},
    {title: "Cook Like a Pro", authorID: 8, name: "Ina Garten", type: "C"},
    {title: "The Joy of Cooking", authorID: 9, name: "Irma S. Rombauer", type: "C"}
    
]
let authors = [
    {authorID: 0, name: "J.K. Rowling"},
    {authorID: 1, name: "J.R.R. Tolkien"},
    {authorID: 2, name: "F.Scott Fitzgerald"},
    {authorID: 3, name: "Jane Austen"},
    {authorID: 4, name: "Douglas Crockford"},
    {authorID: 5, name: "Eric Freeman"},
    {authorID: 6, name: "Kelsey Hightower"},
    {authorID: 7, name: " Adam Freeman"},
    {authorID: 8, name: "Ina Garten"},
    {authorID: 9, name: "Irma S. Rombauer"}
]
function getBooks(){
    return books.filter(isTechnology)
                .map(toBookView)
                .sort(ascByAuthor);
  }
//Small functions with points
function isTechnology(book){
    return book.type === "T";
 }

 function toBookView(book){
    return Object.freeze({
      title : book.title,
      author : authors[book.authorID].name
    });
  }

  function ascByAuthor(book1, book2){
    if(book1.author < book2.author) return -1;
    if(book1.author > book2.author) return 1;
    return 0;
  }

  let technicalBooks = getBooks();
  technicalBooks.map(v => console.log(v))
  console.log("------------------------------------")

  //Point free function
  //In this case, we can improve more and create the new predicate function 
  //in a point-free style using partial application.
  //let isTechnologyPointFree = isBookOfType.bind("null", "T")
  let newBooks = books.filter(isTechnology).map(toBookView).sort(ascByAuthor)
  newBooks.map(v => console.log(v))

  //A point-free function by definition doesn’t use the function 
  //keyword or the => symbol.
