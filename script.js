const myLibrary = [];

function book(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages}, ${this.status}`;
    }
}


const book1 = new book("The Hobbit", "JK Rowling", 239, "Not Read");
const book2 = new book("Jurassic Park", "Talha", 200, "Not Read");

function addBookToLibrary(obj){
    myLibrary.push(obj)
}

addBookToLibrary(book1);
addBookToLibrary(book2);

function displayBooks(){

const table = document.querySelector("#myTable tbody");

function addBookToLibrary(obj) {
  table.textContent = "";
  myLibrary.push(obj);
  displayBooks();
}

function displayBooks() {
  myLibrary.forEach((element) => {
    const row = table.insertRow();
    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pageCell = row.insertCell(2);
    const statusCell = row.insertCell(3);
    const deleteCell = row.insertCell(4);

    row.setAttribute("data-index", generateId());
    titleCell.textContent = element.title;
    authorCell.textContent = element.author;
    pageCell.textContent = element.pages;
    statusCell.textContent = element.status;

    const span = document.createElement("span");
    const statusBtn = document.createElement("button");
    statusBtn.type = "button";
    statusBtn.className = "status-btn";
    statusBtn.textContent = "Change Status";

    span.appendChild(statusBtn);
    statusCell.appendChild(span);

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";

        deleteCell.appendChild(deleteBtn)
    })
}

displayBooks();










