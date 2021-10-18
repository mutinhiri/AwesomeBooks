function addBook(idTitle,idAuthor){    
   var labelTitle=document.createElement("label");
   labelTitle.innerText=idTitle.value;

   var labelAuthor=document.createElement("label");
   labelAuthor.innerText=idAuthor.value;

   var btnRemove=document.createElement("button");
    btnRemove.innerHTML="Remove";
   document.body.appendChild(labelTitle);
   document.body.appendChild(labelAuthor);

   document.body.appendChild(btnRemove)
}   


