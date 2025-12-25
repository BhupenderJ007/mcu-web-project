let upper = document.querySelector('.upper');
let boxes = document.querySelectorAll('.box');
let imgfm = document.getElementById('imgfm');
let imgh = document.querySelector('.imgh');
let bplate = document.querySelector('.bplate');


const trailerclosebtn = document.getElementById('trailerclosebtn');
const binfo = document.querySelector('.binfo');
const trabtn = document.getElementById('trailerbtn');
const trailer = document.getElementById('trailerview');

trabtn.addEventListener('click', (event) => {
    event.stopPropagation();
    trailer.style.display = 'flex';
    binfo.style.display = 'none';
    
});

trailerclosebtn.addEventListener('click', (event) => {
    event.stopPropagation();
    trailer.style.display = 'none';
    binfo.style.display = 'flex';
    
});



boxes.forEach(box => { 
    box.addEventListener('click', () => {
        bplate.classList.add('anib');
        imgh.classList.add('aniF');
        upper.style.display = 'flex';
        imgfm.src = box.querySelector('img').src;
        imgfm.alt = box.querySelector('p').textContent;
    });
});

upper.addEventListener('click', () => {
    bplate.classList.remove('anib');
    imgh.classList.remove('aniF');
    upper.style.display = 'none';
    imgfm.src = '';
    imgfm.alt = '';
    trailer.style.display = 'none';
    binfo.style.display = 'flex';
});