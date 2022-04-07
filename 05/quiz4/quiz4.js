console.log('box');

box.onmousedown = function(event) {

    let shiftX = event.clientX - box.getBoundingClientRect().left;
    let shiftY = event.clientY - box.getBoundingClientRect().top;
  
    box.style.position = 'absolute';
    box.style.zIndex = 1000;
    document.body.append(box);
  
    moveAt(event.pageX, event.pageY);
  
    // 초기 이동을 고려한 좌표 (pageX, pageY)에서 박스을 이동
    function moveAt(pageX, pageY) {
      box.style.left = pageX - shiftX + 'px';
      box.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // mousemove로 박스을 이동
    document.addEventListener('mousemove', onMouseMove);
  
    // 박스을 드롭하고, 불필요한 핸들러를 제거
    box.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      box.onmouseup = null;
    };
  
  };
  
  box.ondragstart = function() {
    return false;
  };