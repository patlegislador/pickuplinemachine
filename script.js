const genBtn = document.querySelector('.generator');
const textArea = document.querySelector('.text-area');
const exitBtn = document.querySelector('.exit');

const category = document.querySelector('.category');
const choices = document.querySelector('.category-shown');

genBtn.addEventListener('click', btn => {
    var jokesNum = Math.floor(Math.random() * jokes.length);

    if(textArea.textContent === jokes[jokesNum]) {
        jokesNum = Math.floor(Math.random() * jokes.length);
        textArea.textContent = jokes[jokesNum];
    } else textArea.textContent = jokes[jokesNum];
});


exitBtn.addEventListener('click', btn => {
    category.classList.add('animated', 'zoomOut');
});

choices.addEventListener('click', btn => {
    category.classList.remove('zoomOut');
    category.classList.add('zoomIn');
});