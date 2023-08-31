


function fillContainer(){
    for(let i = 0; i<16*16;i++){const cell = document.createElement('div');
    cell.classList.add('cell');
    document.querySelector('.container').appendChild(cell);}
}

fillContainer();
