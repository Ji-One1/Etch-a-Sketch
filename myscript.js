gridContainer = document.querySelector(".grid-container");
let gridLength = 4;

function createGrid(gridLength){
    for (let i = 0; i < gridLength; i++){
        rowContainer = document.createElement("div");
        rowContainer.classList = 'row-container';
        gridContainer.appendChild(rowContainer);
        
        for (let j = 0; j < gridLength; j++){
            gridPiece = document.createElement('div');
            gridPiece.classList = 'grid-piece';
            rowContainer.appendChild(gridPiece);
        }
    }
}
function changeColor(e){
    e.target.classList.add('black-color');
}

function changeGridSize(){
    newSize = Number(window.prompt("Choose size between 1 and 100"));
    console.log(newSize);
    if (!(Number.isInteger(newSize)) || newSize > 100 || newSize < 1){
        return alert("Invalid Input")
    }
    gridContainer.innerHTML = '';
    createGrid(newSize)
    gridUnits = document.querySelectorAll('.grid-piece');
    gridUnits.forEach((gridUnit) => {gridUnit.addEventListener('mouseover', changeColor)
});
}




createGrid(gridLength)
gridUnits = document.querySelectorAll('.grid-piece');
gridUnits.forEach((gridUnit) => {gridUnit.addEventListener('mouseover', changeColor)
});

button = document.querySelector('button')
button.addEventListener('click', changeGridSize)