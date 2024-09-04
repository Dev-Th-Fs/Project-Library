const myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages}, ${this.status}`;
  };
}

Book.prototype.resetStatus = function() {
    this.status = this.status === "Have Read" ? "Not Read" : "Have Read";
};

function addBookToLibrary(obj) {
  myLibrary.push(obj);
  displayBooks();
}

function displayBooks() {
  const table = document.querySelector("#myTable tbody");
  table.textContent = "";

  myLibrary.forEach((element, index) => {
    const row = table.insertRow();
    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pageCell = row.insertCell(2);
    const statusCell = row.insertCell(3);
    const deleteCell = row.insertCell(4);

    titleCell.textContent = element.title;
    authorCell.textContent = element.author;
    pageCell.textContent = element.pages;
    statusCell.textContent = element.status;

    const span = document.createElement("span");
    const statusBtn = document.createElement("button");
    statusBtn.type = "button";
    statusBtn.className = "status-btn";
    statusBtn.textContent = "Change Status";

    statusBtn.addEventListener("click", ()=> {
        element.resetStatus();
        console.log("status change");
        displayBooks();
    })

    span.appendChild(statusBtn);
    statusCell.appendChild(span);

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", ()=> {
        myLibrary.splice(index, 1);
        displayBooks();
    })


    deleteCell.appendChild(deleteBtn);
  });
}

const dialog = document.querySelector("dialog");

document.querySelector(".add-btn").addEventListener("click", () => {
  dialog.showModal();
});

document.querySelector(".cancel-btn").addEventListener("click", () => {
  dialog.close();
});

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const status = document.querySelector(`input[name="status"]:checked`).value;

  const book = new Book(title, author, pages, status);

  addBookToLibrary(book);

  dialog.close();

  form.reset();
});


