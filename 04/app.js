/*
1. window
window.name
window.open('주소') // 주소를 오픈
window.opener
window.close(); //보안상의 이유로 안닫힐수 있음

2. url 
location.href='주소';
location.reload();
//#뒤에는 해쉬정보

3. history
history.back(); 
history.go(1);
//보안상의 이유로 읽을 수 없음

*/
/*
console.log('04');
const element1 = document.getElementById('wrap');
const element2 = document.querySelector('.item');
const elements = document.querySelectorAll('div');
console.log(elements);

const div = document.createElement('div');
div.style.border = '1px solid red';
div.innerHTML = ' hello!!';

document.body.appendChild(div);


document.querySelector('#wrap').innerHTML = 111; //값을 대체


window.onload = function () {
    console.log('hello onload')
};


window.addEventListener('load', function(){
    console.log('load2');
});

var clickCount = 0;
function popup(event){
    console.log(++clickCount);
    console.log(arguments, this ,event ,event.type,event.currentTarget);
}
document.body.addEventListener('click', popup);

document.body.addEventListener('click', function(){
    console.log("click");
});
*/

var link = document.querySelector('a');
link.addEventListener('click', function(event){
    window.open('https://daum.net');
    event.preventDefault();
})

