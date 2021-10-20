class Book {
  constructor(title, author){
    this.title = title;
    this.author = author
  }
}

const itemList = document.getElementById('booklist')
const li = (title, author) =>{
  const list = document.createElement('li')
  list.id = id
  list.className = 'list'
  list.innerText = `${title} of by ${author}`
  const button= document.createElement('button')
  button.type = 'button';
  button.innerText = 'remove'
  list.appendChild(button)
  return list
}

class BookCollection {
  constructor(){
    this.data = [];
  }
  addBook(title, author){
    this.data.push(new Book(title, author));
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    this.update()
  }

  removeBook(){
    this.data =this.data.filter()
    this.update()
  }

  update(){
    itemList.innerHTML = '';
    localStorage.setItem('list', JSON.stringify(this.data))
    this.data.forEach((book) =>{
      itemList.appendChild(li(book.title, book.author))
    })
  }
}

const BookList = new BookCollection()
BookCollection.addEventListener('click', (e)=>{
  const item = e.target
  if(item.tagName === 'button'){
    item.closest('li').remove()
    BookCollection.removeBook(parseInt(item.closest('li').id))
  }
})