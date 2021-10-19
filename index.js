function addBook(){   
    //Constructor
    function Book(title, author){
        this.title=title;
        this.author=author;
    }
    const titleCapture=document.getElementById("idTitle").value;
    const authorCapture=document.getElementById("idAuthor").value;
    
    objBook=new Book(titleCapture,authorCapture);

    add();
};   

var arrBooks=[]; 
function add(){
    arrBooks.push(objBook);
    
    let bookTable=document.getElementById("table")
    let newRowTable=bookTable.insertRow(-1);

    let newCellTable=newRowTable.insertCell(0);
    newCellTable.textContent=objBook.title;

    newCellTable=newRowTable.insertCell(1);
    newCellTable.textContent=objBook.author;

    let newDeleteCell=newRowTable.insertCell(2);
    let deleteButton=document.createElement("button");

    deleteButton.textContent="Remove";
    newDeleteCell.appendChild(deleteButton);
    
    deleteButton.addEventListener("click", (event)=>{
        console.log(event.target.parentNode.parentNode.remove());
         
    });
};



// function remove (){
    // remove = document.getElementById('remove-btn')
    // let insert = document.querySelector('.insert-data')
    // arrBooks.forEach(element => {
    //     remove.addEventListener('click', function(){
    //         console.log("remove")
    //         insert.classList.toggle('hide')
    //         remove.classList.toggle('hide')
    //     })
    // });
// }