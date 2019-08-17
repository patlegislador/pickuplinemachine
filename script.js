
const cheesyBtn = document.querySelector('.cheesy');
const dirtyBtn = document.querySelector('.dirty');
const smartBtn = document.querySelector('.smart');
let choice = 'unset';

const displayBox = document.querySelector('.display-box');
const displayTitle = document.querySelector('.cat-title');
const genBtn = document.querySelector('.generator');
const textArea = document.querySelector('.text-area');
const exitBtn = document.querySelector('.exit');

genBtn.addEventListener('click', btn => {
    switch(choice) {
        case 'cheesy': 
        textArea.textContent = cheesies[Math.floor(Math.random() * cheesies.length)];
        break;
        case 'dirty':
        textArea.textContent = dirties[Math.floor(Math.random() * dirties.length)];
        break;
        case 'smart':
        textArea.textContent = smartsies[Math.floor(Math.random() * smartsies.length)];
        break;
        default: alert("Select a category first");
    }
});

exitBtn.addEventListener('click', btn => {
    displayBox.classList.add('animated', 'zoomOut');
});

function showBox() {
    displayBox.style.visibility = 'visible';
    displayBox.classList.remove('zoomOut');
    displayBox.classList.add('zoomIn');
}

cheesyBtn.addEventListener('click', btn => {
    showBox();
    textArea.textContent = '🧀 Cheesy Hits 🧀';
    displayTitle.textContent = 'Cheesy';
    choice = 'cheesy';
});

dirtyBtn.addEventListener('click', btn => {
    showBox();
    textArea.textContent = 'Dirty Hits 👉👌💦';
    displayTitle.textContent = 'Dirty';
    choice = 'dirty';
});

smartBtn.addEventListener('click', function() {
    showBox();
    textArea.textContent = '🧠 Smart Hits 🧠';
    displayTitle.textContent = 'Smart';
    choice = 'smart';
});
