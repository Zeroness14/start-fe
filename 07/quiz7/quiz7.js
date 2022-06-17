const $box = document.querySelector('#box');
const $bug = document.querySelector('#bug');
const $point = document.querySelector('#point');
const $life = document.querySelector('#life');
const bugWidth = $bug.offsetWidth;
const bugHeight = $bug.offsetHeight;
const boxWidth = 400-bugWidth;
const boxHeight = 400-bugHeight;
const bugSpeed = 3000; // 1000= 1 sec
let point = 0;

function getRandomNumber(max){
   return Math.floor(Math.random()*max);
}

function moveBug() {
    console.log('movebug');
    const x = getRandomNumber(boxWidth);
    const y = getRandomNumber(boxHeight);
    $bug.style.left =`${x}px`;
    $bug.style.top =`${y}px`;

}

function startBug(){
    clearInterval(intervalID)
    intervalID = setInterval(moveBug,bugSpeed);
}

function hiBug(){
    point++;
    $point.innerHTML = point;
    $bug.style.display = 'none';
    startBug()

}

function minusLife(){
    life--;
    $life.innerHTML = life;

    if ( life === 0 ) {
        alert('Game over');

    }
}


$bug.addEventListener('click',hiBug);
$bug.addEventListener('click',minusLife);
startBug();

/*
const randomX = getRandomNumber(boxWidth);
const randomY = getRandomNumber(boxHeight);
$bug.style.left = `${randomX}px`;
$bug.style.top= `${randomY}px`;
*/