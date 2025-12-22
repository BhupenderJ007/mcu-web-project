let overlay = document.querySelector('.overlay');
let box = document.querySelector('.box');

let header = document.querySelector('header');
header.addEventListener('click', () => {
    windows.alert('Header Clicked!');
   
});
box.addEventListener('click', () => {
    windows.alert('Box Clicked!');
    overlay.style.display = 'flex';
});