function fillContainer(size){
    
    // gets all current cell divs, if any, and deletes them
    const allBoxes = document.querySelectorAll('.cell'); 
    allBoxes.forEach(box => {
        box.parentNode.removeChild(box);
    });
    
    //creating all new cell divs based on selected size
    for(let i = 0; i<size*size;i++){const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('mouseover', draw);
    cell.addEventListener('click', draw);
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
    if(canDraw || e.type == 'click'){
        if(eraserFlag){
            this.style.cssText += `background-color: white`
        }else{
            this.style.cssText += `background-color: ${drawColor}`;
        };
    };
};

function pickColor(e){
    drawColor = this.value;
};

function setColorToWhite(){
    if(!eraserFlag){
        eraserButton.classList.add('clicked')
        eraserFlag = true;
    } else {
        eraserButton.classList.remove('clicked')
        eraserFlag = false;
    };
};

function eraseAllCells(){
    fillContainer(squareSize);
}

function updateSize(){
    squareSize = this.value;
    fillContainer(squareSize);
};

function updateSizeDisplay(){
    sizeDisplay.innerText = `${sizeSelector.value} x ${sizeSelector.value}`;
};

window.addEventListener('mousedown', startDrawing);
window.addEventListener('mouseup', stopDrawing);
const colorPicker = document.querySelector('#color-pick')
colorPicker.addEventListener('input', pickColor);

const sizeSelector = document.querySelector('#size-selector');
const sizeDisplay = document.querySelector('.size-display p');
sizeSelector.addEventListener('input', updateSizeDisplay);
sizeSelector.addEventListener('change', updateSize);

const eraserButton = document.querySelector('.eraser');
let eraserFlag = false;
const eraseAllButton = document.querySelector('.erase-all');
eraserButton.addEventListener('click', setColorToWhite);
eraseAllButton.addEventListener('click', eraseAllCells);

let canDraw = false;
let squareSize = 16;
let drawColor = "black";
fillContainer(squareSize);
updateSizeDisplay();
