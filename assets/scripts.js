const grid = document.querySelector('#sketchGrid');
let size = 10;
const gridDivs = document.querySelectorAll('.gridDiv');

function createGrid() {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i=0; i<(size*size); i++) { 
        let div = document.createElement('div');
        div.classList.add('gridDiv');
        div.id = (i+1);
        div.addEventListener('mouseenter', addHover);
        grid.appendChild(div);
    };  
}

createGrid();

function removeGrid() {    
    for (let i=0; i<(size*size); i++) {
        const myNode = document.querySelector(".gridDiv");
        grid.removeChild(myNode); 
    }
}

function addHover(e) {
    console.log(e.target.id)
    let div = e.target;
    div.classList.add('color1')
} 

// BUTTONS

const clearButton = document.getElementById('clearButton').addEventListener('click', reset);

function reset() { 
    const divs = document.querySelectorAll('.gridDiv');
    divs.forEach( function(el) { el.classList.remove('color1'); });
 }

 const changeSizeButton = document.getElementById('changeGridSize').addEventListener('click', resizeGrid);

 function resizeGrid() {  
    removeGrid();
    size = prompt('WHAT SIZE?');
    createGrid();
 }



