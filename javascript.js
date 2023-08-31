function fillContainer(size){
    for(let i = 0; i<size*size;i++){const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('mouseover', draw);
    cell.style.cssText = `height: ${(1/size)*100}%; width: ${(1/size)*100}%`;
    document.querySelector('.container').appendChild(cell);}
};

function startDrawing(){
    canDraw = true;
};
function stopDrawing(){
    canDraw = false;    
};

function draw(e){
    if(canDraw){this.style.cssText += "background-color: black;"};
};

window.addEventListener('mousedown', startDrawing);
window.addEventListener('mouseup', stopDrawing);

let canDraw = false;
let squareSize = 16;
fillContainer(squareSize);
