/*
let button = document.querySelector('#addButton');

button.addEventListener('click', creatForm);

*/

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


let myLibrary = [ ];

let bookOne = new Book("Atomic Habits", "James Clear", 2016, true);
let bookTwo = new Book("The 7 Habits of Highly Effective People", "Steve Core", 2016, true);



myLibrary.push(bookOne);
myLibrary.push(bookTwo);

displayBooks();


function saveBookDetails() {

    if(!check_empty()) {
        alert("Please fill All Fields!");
        return ;
    }

    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var  year = document.getElementById('publishedYear').value;
    var read = document.getElementById('read');
    if(read ===' Yes') {
        read = true;
    }else {
        read = false;
    }

    var newBook = new Book(title, author, year, read);

    myLibrary.push(newBook);

    console.log("Hi, from saveBook Details method.");
    alert("Book Added Successfully...");


}


// Validating Empty Field
function check_empty() {
    if (document.getElementById('title').value == "" || document.getElementById('author').value == "" || document.getElementById('publishedYear').value == "") {
        return false;
        //alert("Fill All Fields !");
    } else {
   //document.getElementById('form').submit();
    
   //alert("Book Added Successfully...");
        return true;
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
        row.dataset.indexNumber = i;
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
        let removeBook = document.createElement('button');
        removeBook.id = 'removeBook';
        removeBook.textContent = "Remove Book.";
        //removeBook.setAttribute('onclick', 'deleteBook(' + `${row.dataset.indexNumber}` + ');');

        row.appendChild(title);
        row.appendChild(author);
        row.appendChild(year);
        row.appendChild(read);
        row.appendChild(removeBook);
        container.appendChild(row);
    }


}

function deleteBook(dataIndex) {
    console.log(dataIndex);
    myLibrary.splice(dataIndex);
    
    console.log("This is my length:" +myLibrary.length);

    displayBooks();
    alert("succeffuly deleted");
}


const removeBook = document.querySelectorAll('#removeBook');

removeBook.forEach((button) => { 

    button.addEventListener('click', () => { 

        button.parentNode.parentNode.removeChild(button.parentNode);
        console.log('This book is removed: ' + button.parentNode.getAttribute('data-index-number'));

        myLibrary.splice(button.parentNode.getAttribute('data-index-number'));
        alert("Book is Successfully deleted.");
    });

});


