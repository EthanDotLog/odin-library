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
  table.innerHTML = `
  <tr>
    <th class="title">Title</th>
    <th class="author">Author</th>
    <th>Pages</th>
    <th>Read</th>
</tr>
`;
  for (let i = 0; i < myLibrary.length; i++) {
    
    table.innerHTML += `
    <hr>
    <tr class="book">
      <td class="book-cell title" data="myLibrary${[i]}">${myLibrary[i].title}</td>
      <td class="book-cell author" data="myLibrary${[i]}">${myLibrary[i].author}</td>
      <td class="book-cell" data="myLibrary${[i]}">${myLibrary[i].pages}</td>
      <td class="book-cell" data="myLibrary${[i]}">${myLibrary[i].read === true ? '&#x2611;' : '&#x2610;'}</td>
    </tr>
    <tr>
      <td class="hidden delete-btn" id="myLibrary${[i]}">remove book</td>
    </tr>
    <hr>
    `
  }
    document.querySelectorAll('.book-cell').forEach(cell => {
      cell.addEventListener('click', function(e) {
        document.getElementById(this.getAttribute('data')).classList.toggle('hidden');
    })
  })
  document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const index = this.getAttribute('id').split('myLibrary')[1];
      myLibrary.splice(index, 1);
      printLibrary();
    })
  })
}



document.getElementById('add-book').addEventListener('click', function() {
  document.getElementById('pop-up').classList.toggle('hidden');
});

document.getElementById('submit-book').addEventListener('click', function(e){
  e.preventDefault();
  addBookToLibrary();
  document.getElementById('pop-up').classList.toggle('hidden');
});
