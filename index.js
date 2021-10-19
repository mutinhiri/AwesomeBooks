const showFiel = document.getElementById('booklist');
const submit = document.getElementById('btnAdd');

const bookList = [];
const bookList2 = [];
// Functionalities 

function Book(title, author){
  this.title = title;
  this.author = author;
};

function saveLocal(){
  window.localStorage.setItem('list', JSON.stringify(bookList))
}
const book2= new Book();

window.onload = (event) => {
  let myDataJason=localStorage.getItem('list');
  let myData=JSON.parse(myDataJason);
  document.getElementById('booklist').innerHTML = ''
  document.getElementById('title').value = ''
  document.getElementById('author').value = ''

  myData.forEach((e) =>{
    const contain = document.createElement('div') 
    contain.className = 'contain';
    const title = document.createElement('div')
    title.className = 'title';
    const author = document.createElement('div');
    author.className = 'author'
    title.innerHTML = e.title;
    author.innerHTML = e.author;
    const remove = document.createElement('button')
    remove.className = 'remove'
    remove.textContent = 'Remove'

    contain.appendChild(title);
    contain.appendChild(author);
    contain.appendChild(remove);
    showFiel.appendChild(contain)
   
  });
//   let i=100;
//   myData.forEach(function(elem) {
      
//     console.log(i);
//     console.log(elem.title);
//     console.log(elem.author);
//     // e.title; 
//     // e.author;
//     console.log(book2);
//     book2.title=elem.title; 
//     book2.author=elem.author;
//     console.log(book2.title);
//     console.log(book2.author);
//     console.log('Before book2');
//     console.log(book2);
//     console.log('Book list before');
//     console.log(bookList2);
//     bookList2.push(i);
//     console.log("bookLISTT");
//     console.log(bookList2);
//     i=i+1;
//   });
  
};

function addBook(){
  const book1 = new Book();
  book1.title = document.getElementById('title').value;
  book1.author = document.getElementById('author').value;
  bookList.push(book1);
}

function pushContent(){
  document.getElementById('booklist').innerHTML = ''
  document.getElementById('title').value = ''
  document.getElementById('author').value = ''
  bookList.forEach((e) =>{
    const contain = document.createElement('div') 
    contain.className = 'contain';
    const title = document.createElement('div')
    title.className = 'title';
    const author = document.createElement('div');
    author.className = 'author'
    title.innerHTML = e.title;
    author.innerHTML = e.author;
    const remove = document.createElement('button')
    remove.className = 'remove'
    remove.textContent = 'Remove'

    contain.appendChild(title);
    contain.appendChild(author);
    contain.appendChild(remove);
    showFiel.appendChild(contain)
    saveLocal(title,author)
  })
};

function removeBook(){
  const removeBtn = document.querySelectorAll('.remove');
  for (let i = 0; i<removeBtn.length; i+=1){
    removeBtn[i].addEventListener('click', ()=>{
      bookList.splice(bookList[removeBtn[i]], 1);
      removeBtn[i].parentNode.remove();
      saveLocal()
    })
  }
}

// Event Listener
submit.addEventListener('click', ()=>{
  addBook()
  pushContent()
  removeBook()
})

