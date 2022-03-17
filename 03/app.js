console.log('03');
/*
var foo = 42;
var foo = "bar";
var foo = true;

if("test"){  
    console.log("true");
  }
  "2"  + 2; 
  2 + 5 + "1" //숫자 합친 후 "x" 문자열 나열

  var a= 1;
  var b = a;
  b = 2;
  console.log(a, b);

var a = [1];
var b = a;
b[0] = [2];
console.log(a, b);

var a = { x: 1};
var b = a;
b.x = 2;
console.log(a,b);

function byValue(count){
    count = count + 2;

}
var count = 3 ;
byValue(count);
console.log(count);

function byReference(count) {
    count.push('2');
  }
  var count = ['1'];
  byReference(count);
  console.log(count);
  

var isMan = true;
var gender = '';
  if (isMan) {
    console.log('난 남자');
  } else {
    console.log('난 여자인가?');
  }
  var gender = isMan ? '남자' : '여자';

  for (var count = 0; count < 5; count++){

  }

  var obj = {a : 1, b: 2 };
  for (var prop in obj){
      console.log(prop, obj[prop]);
    
  }


alert('alert');
var who = prompt('당신은 누구세요?');
var isDelete = confirm('정말 삭제합니까?');
if(isDelete){}
var enc = encodeURIComponent('카카오');
decodeURIComponent(enc);
isNaN('1'); 
parseInt('12');
parseInt('09', 10); 
parseFloat('10.33');


function test() {
    console.log('test()');
  }
  var id = setTimeout(test, 1000); 
  var id = setInterval(test, 1000); 
  function test() {
    console.log('test()');
    setTimeout(test, 1000);
  }
  
  //clearTimeout(id) ;
  //clearInterval(id);

var nick = 'aji';

function test() {
  var age = 30; 
  console.log(nick, age);
}

test();
console.log(age);




var text = 'abc def ghi jkl abc def';
var testReg = /abc/; 
var result = testReg.test(text);

console.log(result); 

*/
var todos = ['운동'];
var todo = '게임';

function Create (todos, todo){
 todos.push(todo)
 console.log('create' : + todo);
}

function Read (todos){
    todos.forEach(function(todo){
        console.log('Read' : + todo);
    })
}



















var count = [10,20,30,40,50,60,70,100];



// 구구단 출력 for 문

