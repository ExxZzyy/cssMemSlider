console.log('Мобильная версия начинается с ширины < 769px', 'Самооценка: 140 баллов')
const imgContainer = document.querySelector('.image_container'),
      bullets = document.querySelectorAll('#bullet'),            
      img = document.querySelector('#img'),
      text  = document.querySelector('.text'),
      activeBullets = document.querySelectorAll('#active_bullet'); 

bullets.forEach((val, id) => val.addEventListener('click', slideTo.bind(this, id)));
let currBull = 0;
let pos = '';

function animation() {
    text.classList.remove("run-animation");
    void text.offsetWidth;
    text.classList.add("run-animation");
} 
function slideTo(slideName) {
if (currBull > slideName) {
    pos = 'left';
}
else if (currBull < slideName) {
    pos = 'right';
}
currBull = slideName;

switch (currBull) {
    case 0:
        text.innerHTML = 'My brother when with his older friends & me try to fit in';
        animation();
      break;
    case 1:
        text.innerHTML = 'Other Programmers & Python Programmer';
        animation();
      break;
    case 2:
        text.innerHTML = 'Programmers looking at programming memes';
        animation();
      break;
    case 3:
        text.innerHTML = 'Back-End Developper Doing CSS';
        animation();
  }
    img.src = `./assets/${currBull+1}.jpg`; 
    img.classList.remove("run-animation");
    void img.offsetWidth;
    img.classList.add("run-animation");
    activeBullets.forEach((el)=> el.className = 'bullet_not_active');
    activeBullets[currBull].className = 'bullet_active';
} 
