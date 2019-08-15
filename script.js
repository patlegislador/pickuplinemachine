const genBtn = document.querySelector('.generator');
const textArea = document.querySelector('.text-area');

genBtn.addEventListener('click', btn => {
    var jokesNum = Math.floor(Math.random() * jokes.length);

    if(textArea.textContent === jokes[jokesNum]) {
        jokesNum = Math.floor(Math.random() * jokes.length);
        textArea.textContent = jokes[jokesNum];
    } else textArea.textContent = jokes[jokesNum];
});