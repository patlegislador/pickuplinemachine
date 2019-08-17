
const cheesyBtn = document.querySelector('.cheesy');
const dirtyBtn = document.querySelector('.dirty');
const smartBtn = document.querySelector('.smart');

const displayBox = document.querySelector('.display-box');
const displayTitle = document.querySelector('.cat-title');
const genBtn = document.querySelector('.generator');
const textArea = document.querySelector('.text-area');
const exitBtn = document.querySelector('.exit');

var cheesy = {
    name: 'Cheesy'
};

var dirty = {
    name: 'Dirty'
};

var smart = {
    name: 'Smart'
};

displayTitle.textContent = cheesy.name;

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

cheesyBtn.addEventListener('click', btn => {
    displayBox.classList.remove('zoomOut');
    displayBox.classList.add('zoomIn');
    displayTitle.textContent = cheesy.name;
});

dirtyBtn.addEventListener('click', btn => {
    displayBox.classList.remove('zoomOut');
    displayBox.classList.add('zoomIn');
    displayTitle.textContent = dirty.name;
});

smartBtn.addEventListener('click', btn => {
    displayBox.classList.remove('zoomOut');
    displayBox.classList.add('zoomIn');
    displayTitle.textContent = smart.name;
});