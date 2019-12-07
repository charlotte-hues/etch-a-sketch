const grid = document.querySelector('#sketchGrid');

function createGrid() {
    for (let i=0, n=1; i<256; i++, n++) { 
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

    if (div)
    div.classList.add('hover')
} 

console.log(gridDivs);