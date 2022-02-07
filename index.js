const buttonPlay = document.querySelector(".play-button");
const buttonPause = document.querySelector(".pause-button");
const audio = document.querySelector('audio');
const audioPlay = document.querySelector('.play');
const audioPause = document.querySelector('.pause');
let isPlay = false;

buttonPlay.addEventListener('click', startAudio);

function startAudio () {
    buttonPlay.style.display = "none";
    buttonPause.style.display = 'block';
    isPlay = true;
    startStopAudio()
};

buttonPause.addEventListener('click', pauseAudio)

function pauseAudio() {
    console.log('pause');
    buttonPause.style.display = 'none';
    buttonPlay.style.display = "block";    
    isPlay = false;
    startStopAudio()
};

const birdsName = document.querySelectorAll(".list-item");
const logoBird = document.querySelector('.logo-icon');


const birdChange = document.querySelector('.header');
const backgroundPicture = document.querySelector('.section');


birdChange.addEventListener('click', changeImage);

function changeImage(event) {
    if (event.target.classList.contains('list-item') || event.target.classList.contains('logo-icon')) {
        console.log(event.target.dataset.bird);
        backgroundPicture.style.backgroundImage = `url(./assets/img/${event.target.dataset.bird}.jpg)`;
        audio.src = `./assets/audio/${event.target.dataset.bird}.mp3`;
        startAudio ();      
        
        
        birdsName.forEach((item) => {
            item.classList.remove('color-item');
        });
        event.target.classList.add('color-item');       
        
        logoBird.style.fill = "white";

        if(event.target.classList.contains('logo-icon')) {
            logoBird.style.fill = "goldenrod";
        }

    }
}


function startStopAudio() {
    if (isPlay) {
        audio.currentTime = 0;
        audio.play();
    } else {
        audio.pause();
    }
}