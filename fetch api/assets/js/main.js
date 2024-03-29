const getBooks = () => {
    let myRequest = new XMLHttpRequest();
    let url = 'https://www.googleapis.com/books/v1/volumes?q=1';
    myRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
    let MyResponse = JSON.parse(this.responseText);
    let books = MyResponse.items;
    let row = document.querySelector(".row");
    let columns = "";
    books.forEach(book => {
    let title = book.volumeInfo.title.substr(0, 20);
    let img = book.volumeInfo.imageLinks.thumbnail;
    let desc = book.volumeInfo.description || "no description to this book";
    desc = desc.substr(0, 95) + "..."
    let infoLink = book.volumeInfo.infoLink;
    columns +=
    ` <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 mt-4" >
    <div class="card bg-danger text-center text-white p-3" 
    style="height:40vh">
    <img src="${img}" class=" w-25 card-img-top m-auto" alt="">
    <h4 class="mt-4" style="font-size:20px">${title}</h4>
    <p style="font-size:13px">${desc}</p>
    <a href="${infoLink}" class="btn btn-primary btn-sm w-50 d-block mauto">more info</a>
    </div><!-- card -->
    </div><!-- col-4 -->`;
    });
    row.innerHTML = columns;
    } else if (this.readyState === 4) {
    console.log("couldn't fetch the data");
    }
    };
    myRequest.open('GET', url, true);
    myRequest.send();
}
getBooks();