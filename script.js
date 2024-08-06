const findBook = document.querySelector('.booksearch');
const shelvs = document.querySelectorAll('.book');

findBook.addEventListener('keyup', function(event){
    const word = event.target.value.toLowerCase();

    shelvs.forEach(item => {
        item.querySelector('p').textContent.toLowerCase().includes(word) ?
        (item.style.display = "block") : (item.style.display = "none");
    })
})