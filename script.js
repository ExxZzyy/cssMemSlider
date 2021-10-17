const imgContainer = document.querySelector('.image_container'),
      bullets = document.querySelectorAll('#bullet'),            
      img = document.querySelector('#img'),
      text  = document.querySelector('.text'),
      activeBullets = document.querySelectorAll('#active_bullet'); 

bullets.forEach((val, id) => val.addEventListener('click', slideTo.bind(this, id)));
let currBull = 0;
let pos = '';
function slideTo(slideName) {
console.log(slideName);
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
      break;
    case 1:
        text.innerHTML = 'Other Programmers & Python Programmer';
      break;
    case 2:
        text.innerHTML = 'Programmers looking at programming memes';
      break;
    case 3:
        text.innerHTML = 'Back-End Developper Doing CSS';
  }

// let newImg = document.createElement('img');
//     newImg.style.position = 'absolute';
//     newImg.style.width = '1000px';  
//     newImg.style.height = '600px';    
//     newImg.className = `newImg${pos}`;    
//     newImg.src = `./assets/${currBull+1}.jpg`;
//     imgContainer.append(newImg);
//     setTimeout(()=> newImg.style.left = '0px')
//     newImg.addEventListener('transitionend', ()=> {
//         img.src = newImg.src;
//         newImg.remove()
//     }) 
    img.src = `./assets/${currBull+1}.jpg`; 
    activeBullets.forEach((el)=> el.className = 'bullet_not_active');
    activeBullets[currBull].className = 'bullet_active';
} 
