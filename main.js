const books = document.querySelector(".books");

const myLibrary = [{
    title: 'Book1',
    author: 'me',
    pages: 500,
    read: true,
},
{
    title: 'Book2',
    author: 'you',
    pages: 5000,
    read: false,
}];

function createBookItem (book,index){
    const bookItem = document.createElement('div')};
    bookItem.setAttribute('id', index)
    bookItem.setAttribute('key', index)
    bookItem.setAttribute('class', 'card book')


function renderBooks () {
    myLibrary.map((book,index) => {
        createBookItem(book,index)
    })
}