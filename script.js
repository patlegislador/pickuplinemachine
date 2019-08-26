const categories = Array.from(document.querySelectorAll('.category'));
let choice = 'unset';

const displayBox = document.querySelector('.display-box');
const displayTitle = document.querySelector('.cat-title');
const genBtn = document.querySelector('.generator');
const textArea = document.querySelector('.text-area');
const exitBtn = document.querySelector('.exit');

categories.forEach(function(item){
    item.addEventListener('click', function() {
        showBox();
        textArea.innerHTML = 'Get you some <strong>' + item.value + '</strong> lines';
        displayTitle.textContent = item.value;
        choice = item.value;

        genBtn.addEventListener('click', btn => {
            textArea.textContent = data[item.value][Math.floor(Math.random() * data[item.value].length)];
        })
    });
});

exitBtn.addEventListener('click', btn => {
    displayBox.classList.add('animated', 'zoomOut');
});

function showBox() {
    displayBox.style.visibility = 'visible';
    displayBox.classList.remove('zoomOut');
    displayBox.classList.add('zoomIn');
}