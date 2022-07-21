function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  
return fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  //Returning the response into json
  .then((books) => renderBooks(books))
  //Gives you the books as JSON, (whatever is returned by the fetch call)
    
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}
//Renders book titles into the DOM by passing 
//  a JSON object to renderBooks()


document.addEventListener('DOMContentLoaded', function () {
  fetchBooks();
});

//Promise is a future value (One you don't have yet)
//A placeholder, basically
