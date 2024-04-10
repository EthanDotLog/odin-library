const table = document.getElementById('table')

const myLibrary = [
  
];

testbook1 = new Book('book title1', 'book author1', 'book pages1', false)
testbook2 = new Book('book title2', 'book author2', 'book pages2', true)
testbook3 = new Book('book title3', 'book author3', 'book pages3', false)
testbook4 = new Book('book title4', 'book author4', 'book pages4', true)
myLibrary.push(testbook1, testbook2, testbook3, testbook4)

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

document.getElementById('start-btn').addEventListener('click', function() {
  printLibrary();
})
function addBookToLibrary() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  printLibrary();
}

function printLibrary() {
  table.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i++) {
    table.innerHTML += `
    <tr class="book">
      <td>${myLibrary[i].title}</td>
      <td>${myLibrary[i].author}</td>
      <td>${myLibrary[i].pages}</td>
      <td>${myLibrary[i].read === true ? '&#x2611;' : '&#x2612;'}</td>
    </tr>
    <tr>
      <td class="remove" value="myLibrary[i]" id="book-remove">remove book</td>
    </tr>
    `
  }
}





document.getElementById('submit-book').addEventListener('click', function(e){
  e.preventDefault();
  addBookToLibrary();
});