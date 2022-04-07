console.log('06');
/*
//let 블록 유효범위 변수
let team = 'FE';

//const 상수 선언 리터럴 할당
const area = 'jeju';

//기본매개변수
function multiply(a, b = 1) {
  return a * b;
}

//화살표 함수
[1, 2, 3].map(item => item * 2);

btn.addEventListener(event => {
  console.log('click');
});

//es5
var cp = 'ssully';
var url = 'https://1boon.kakao.com/' + cp;
//es6
const url = `https://1boon.kakao.com/${cp}`

//전개구문 
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));

const words = ['a', 'b'];
const newWords = [...words];
console.log(newWords);

const arr1 = [3, 4, 5];
const arr2 = [1, 2, ...arr1, 6, 7];
console.log(arr2); // [1, 2, 3, 4, 5, 6, 7]

const obj = {
  a: 1,
  b: 2,
};
const newObj = { ...obj };
console.log(newOjb);

const number = 1234