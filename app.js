let button = document.querySelector('#addButton');

button.addEventListener('click', creatForm);


function creatForm() {
    let addBookForm = document.createElement('form');

    let text = prompt("Please Enter the book title: ");
    myLibrary.push(new Book(text, "De", 2000, false));
}


let Book = function Book(title, author, publishedYear, read) {
    this.title = title, 
    this.author = author, 
    this.publishedYear = publishedYear, 
    this.read = function() { 
        if(!this.read) {
             return "Sorry, I have not read" +  `${this.title}`;
        } else {
            return "Thank You for your offer! I have read " + `${this.title}`;
        }
    }
}

function addBookToLibrary(Book) {
    let notInTheLibrary = false;

    for( let book in myLibrary) {
        if(book.title === Book.title)
        {
            notInTheLibrary = true;
            break;
        }
    }

    if(notInTheLibrary) {
        return "Sorry, we aleardy have " + `${Book.title}` + " in our Library. No need to add";
    }else {
        myLibrary.push(Book);
        return "Successfully added to the library.";
    }
}

function displayBooks()
{
    var container = document.querySelector('#container');
    /**
    container.textContent = "Hi";
    container.style.color = 'red';
   */
   for(let i = 0; i < myLibrary.length; i++) {
        let row = document.createElement('div');
        let title = document.createElement('h4');
        title.textContent = myLibrary[i].title;
        let author = document.createElement('p');
        author.textContent = myLibrary[i].author;
        let year = document.createElement('p');
        year.textContent = myLibrary[i].publishedYear;
        let read = document.createElement('p');
        read.textContent = myLibrary[i].read();
        

        row.appendChild(title);
        row.appendChild(author);
        row.appendChild(year);
        row.appendChild(read);
        container.appendChild(row);
    }


}
let bookOne = new Book("Atomic Habits", "James Clear", 2016, true);

let myLibrary = [ ];

myLibrary.push(bookOne);

displayBooks();