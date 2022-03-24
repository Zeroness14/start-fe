var board = document.getElementById("board");
for(var i=0; i<4; i++){
    for(var j=0; j<4; j++){
        var row = document.createElement('DIV')
    row.className = 'row'
    row.style.flexDirection = i % 2 === 0 ? '' : 'row-reverse'; 
    for (var j = 0; j < 4; j++){
      var square = document.createElement('DIV')
      square.className = 'square'
      square.style.backgroundColor = j % 2 === 0 ? 'white' : 'black'
      row.appendChild(square)
    }
    board.appendChild(row)
    }
}