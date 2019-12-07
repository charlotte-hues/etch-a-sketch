const grid = document.querySelector('#sketchGrid');
let gridSize = 256;

function reset() { 
    // gridSize = prompt('What size Grid?');

    const divs = document.querySelectorAll('.gridDiv');
    divs.forEach( function(el) {
        el.classList.remove('color1');
    });

 }

function createGrid() {
    for (let i=0, n=1; i<gridSize; i++, n++) { 
        let i = document.createElement('div');
        i.classList.add('gridDiv');
        i.id = n;
        i.addEventListener('mouseenter', addHover);
        grid.appendChild(i);
    };    
}

createGrid();

const gridDivs = document.querySelectorAll('.gridDiv');

function addHover(e) {
    console.log(e.target)
    let div = e.target;
    div.classList.add('color1')
} 

const clearButton = document.getElementById('clearButton').addEventListener('click', reset);



