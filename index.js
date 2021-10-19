//Create Constructor
// function Book (title, author){
//     this.title=title;
//     this.author=author;
// };

// Create Book Object
// const book={title:idTitle.value, author:idAuthor.value}
// let bookArr=[];

function addBook(){   
    //Constructor
    function Book(title, author){
        this.title=title;
        this.author=author;
    }
    const titleCapture=document.getElementById("idTitle").value;
    const authorCapture=document.getElementById("idAuthor").value;
    

    objBook=new Book(titleCapture,authorCapture);
    // console.log(objBook);
    add();

    // console.log(objBook);

    // const book=new Book(idTitle.value, idAuthor.value);

    // // console.log(book.title);

    // book.title=idTitle.value;
    // book.author=idAuthor.value;

    // bookArr.push(book);
    // console.log(bookArr);

    // var labelTitle=document.createElement("label");
    // labelTitle.innerText=book.title;

    // var labelAuthor=document.createElement("label");
    // labelAuthor.innerText=book.author;

    // var btnRemove=document.createElement("button");
    // btnRemove.innerHTML="Remove";

    // document.body.appendChild(labelTitle);
    // document.body.appendChild(labelAuthor);

    // document.body.appendChild(btnRemove);
}   

var arrBooks=[]; 
function add(){
     arrBooks.push(objBook);
     console.log(arrBooks);
    document.getElementById("table").innerHTML += '<tbody><td>'+objBook.title+'</td> <td>'+objBook.author+'</td></tbody>';
};
 


