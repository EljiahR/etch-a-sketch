


function fillContainer(size){
    for(let i = 0; i<size*size;i++){const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.cssText = `height: ${(1/size)*100}%; width: ${(1/size)*100}%`;
    document.querySelector('.container').appendChild(cell);}
}


let squareSize = 16;
fillContainer(squareSize);
