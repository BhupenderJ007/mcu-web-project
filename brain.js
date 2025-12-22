let upper = document.querySelector('.upper');
let boxes = document.querySelectorAll('.box');
let imgfm = document.getElementById('imgfm');
let imgh = document.querySelector('.imgh');

boxes.forEach(box => { 
    box.addEventListener('click', () => {
        imgh.classList.add('aniF');
        upper.style.display = 'flex';
        imgfm.src = box.querySelector('img').src;
        imgfm.alt = box.querySelector('p').textContent;
    });
});

upper.addEventListener('click', () => {
    imgh.classList.remove('aniF');
    upper.style.display = 'none';
    imgfm.src = '';
    imgfm.alt = '';
});