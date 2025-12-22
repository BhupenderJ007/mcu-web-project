let upper = document.querySelector('.upper');
let boxes = document.querySelectorAll('.box');
let imgfm = document.getElementById('imgfm');

boxes.forEach(box => { 
    box.addEventListener('click', () => {
        upper.style.display = 'flex';
        imgfm.src = box.querySelector('img').src;
        imgfm.alt = box.querySelector('p').textContent;
    });
});

upper.addEventListener('click', () => {
    upper.style.display = 'none';
    imgfm.src = '';
    imgfm.alt = '';
});