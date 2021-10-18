function addBook(){    
    const book1=new Books();
    book1.title=document.getElementById(idTitle).value;
    book1.author=document.getElementById(idAuthor).value;

}   
function Books (title, author){
    this.title=title,
    this.author=author
}

let storage=[]
[book1.title, book1.title];
