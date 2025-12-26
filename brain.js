let upper = document.querySelector('.upper');
let boxes = document.querySelectorAll('.box');
let imgfm = document.getElementById('imgfm');
let imgh = document.querySelector('.imgh');
let bplate = document.querySelector('.bplate');



const binfo = document.querySelector('.binfo');
const trabtn = document.getElementById('trailerbtn');
const trailerview = document.querySelector('.trailerview');
const trastopbtn = document.querySelector('.trailerstop');





trabtn.addEventListener('click', (event) => {
    event.stopPropagation();
    trailerview.style.display = 'inline-block';
    binfo.style.display = 'none';
    window.scrollTo(0, 0);
});

trastopbtn.addEventListener('click', (event) => {
    event.stopPropagation();
    trailerview.style.display = 'none';
    binfo.style.display = 'inline-block';   
    window.scrollTo(0, 0);      
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
    trailerview.style.display = 'none';
    binfo.style.display = 'inline-block';
});