/*
let button = document.querySelector('#addButton');

button.addEventListener('click', creatForm);

*/


// Validating Empty Field
function check_empty() {
    if (document.getElementById('title').value == "" || document.getElementById('author').value == "" || document.getElementById('publishedYear').value == "") {
    alert("Fill All Fields !");
    } else {
   document.getElementById('form').submit();
    alert("Book Added Successfully...");
    }
}
//Function To Display Popup
function showAddForm() {
    document.getElementById('addBook').style.display = "block";
}
    //Function to Hide Popup
function hideAddForm(){
    document.getElementById('addBook').style.display = "none";
}



let Book = function Book(title, author, publishedYear, read) {
    this.title = title, 
    this.author = author, 
    this.publishedYear = publishedYear, 
    this.read = function() { 
        if(!this.read) {
             return "Sorry, I have not read" + '"' + `${this.title}` + '"';
        } else {
            return "Thank You for your offer! I have read " + '"' + `${this.title}` +'."';
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
        return "Sorry, we aleardy have " + '"' + `${Book.title}` + '"' + " in our Library. No need to add";
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
        row.classList.add('card');
        let title = document.createElement('h4');
        title.classList.add('title');
        title.textContent = myLibrary[i].title;
        let author = document.createElement('p');
        author.textContent = myLibrary[i].author;
        let year = document.createElement('p');
        year.textContent = myLibrary[i].publishedYear;
        let read = document.createElement('button');
        //read.classList.add('read-status');
        read.textContent = myLibrary[i].read();
        
        

        row.appendChild(title);
        row.appendChild(author);
        row.appendChild(year);
        row.appendChild(read);
        container.appendChild(row);
    }


}
let bookOne = new Book("Atomic Habits", "James Clear", 2016, true);
let bookTwo = new Book("The 7 Habits of Highly Effective People", "Steve Core", 2016, true);

let myLibrary = [ ];

myLibrary.push(bookOne);
myLibrary.push(bookTwo);

displayBooks();