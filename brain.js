let upper = document.querySelector('.upper');
let boxes = document.querySelectorAll('.moviebox');
let imgfm = document.getElementById('imgfm');
let imgh = document.querySelector('.imgh');
let bplate = document.querySelector('.bplate');
const nameplate = document.querySelector('#nameof');


const binfo = document.querySelector('.binfo');
const trabtn = document.getElementById('trailerbtn');
const trailerview = document.querySelector('.trailerview');
const trastopbtn = document.querySelector('.trailerstop');
const template = document.getElementById('cast1');
const castcontainer = document.querySelector('.castslide');
const template2 = document.querySelector('.creator1');
const creatorcontainer = document.querySelector('.creatorslide');

const trailerlink = document.getElementById('iframe1');




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


async function fetchData(data,data2) {


    setTimeout(() => {
       console.log(data);
       console.log(data2.querySelector('p').textContent);
    }, 2000);
    let moviesdata = await fetch('movie.json')
    .then(response => response.json())
    .then(data3 => {
       
        console.log(data3.thor.cast);
        
    }).catch(error => console.error('Error fetching data:', error));

}

async function setimages(data3) {
    let moviesdata = await fetch('mcumovie.json');
    let moviesjson = await moviesdata.json();

    let castdata = await fetch('mcucast.json');
    let castjson = await castdata.json();

    let castmem =moviesjson.movies[data3].cast;

    castmem.forEach(member => {

        const newmem = template.cloneNode(true);
        castcontainer.appendChild(newmem);

        newmem.querySelector('.cimg').src = 'images/'+member + '.png';
        newmem.querySelector('.actname').textContent = castjson.cast[member].name;
        newmem.querySelector('.charname').textContent = castjson.cast[member].role;
    });

   
    console.log(data3);
    console.log(moviesjson.movies[data3]);
    console.log(moviesjson.movies[data3].cast);

    director = moviesjson.movies[data3].director;
    writer = moviesjson.movies[data3].writer;
    
     director.forEach(member => {

        const creatormem =template2.cloneNode(true);
        creatorcontainer.appendChild(creatormem);

        creatormem.querySelector('.cimg').src = 'images/'+member+ '.png';
        creatormem.querySelector('.actname').textContent = member;
        creatormem.querySelector('.charname').textContent = 'Director';
    });
 

    writer.forEach(member => {
        const creatormem2 =template2.cloneNode(true);
    creatorcontainer.appendChild(creatormem2);

    creatormem2.querySelector('.cimg').src = 'images/'+member+ '.png';
    creatormem2.querySelector('.actname').textContent = member;
    creatormem2.querySelector('.charname').textContent = 'Writer';
    });


    const creatormem3 =template2.cloneNode(true);
    creatorcontainer.appendChild(creatormem3);

    creatormem3.querySelector('.cimg').src = 'images/'+moviesjson.movies[data3].cinematographer + '.png';
    creatormem3.querySelector('.actname').textContent = moviesjson.movies[data3].cinematographer;
    creatormem3.querySelector('.charname').textContent = 'Cinematographer';


    trailerlink.src = "";
    trailerlink.src = moviesjson.movies[data3].trailerlink;
    
    
   
}

boxes.forEach(box => { 
    box.addEventListener('click', () => {
        bplate.classList.add('anib');
        imgh.classList.add('aniF');
        upper.style.display = 'flex';
        imgfm.src = box.querySelector('img').src;
        imgfm.alt = box.querySelector('p').textContent;
        nameplate.textContent = box.querySelector('p').textContent;
        console.log(box.querySelector('p').textContent);
        setimages(imgfm.alt);
        
    
   
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
    castcontainer.innerHTML = '';
    creatorcontainer.innerHTML = '';
});