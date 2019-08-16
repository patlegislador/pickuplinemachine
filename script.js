const genBtn = document.querySelector('.generator');
const textArea = document.querySelector('.text-area');
const exitBtn = document.querySelector('.exit');

const displayBox = document.querySelector('.display-box');
const displayText = document.querySelector('.cat-title');
const choices = document.querySelector('.category');

genBtn.addEventListener('click', btn => {
    var jokesNum = Math.floor(Math.random() * jokes.length);

    if(textArea.textContent === jokes[jokesNum]) {
        jokesNum = Math.floor(Math.random() * jokes.length);
        textArea.textContent = jokes[jokesNum];
    } else textArea.textContent = jokes[jokesNum];
});

exitBtn.addEventListener('click', btn => {
    displayBox.classList.add('animated', 'zoomOut');
});

choices.addEventListener('click', btn => {
    displayBox.classList.remove('zoomOut');
    displayBox.classList.add('zoomIn');
    displayText.textContent = choices.textContent;
});