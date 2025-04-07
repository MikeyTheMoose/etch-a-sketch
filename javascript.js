// function backgroundColor() {
//     const colors = ['white','gray','blue']
//     const dropdown = document.querySelector('#background');
//     for (color of colors) {
//         let opt = document.createElement('option');
//         opt.value = color;
//         opt.textContent = color;
//         dropdown.appendChild(opt);
//     }
// }

let inputColor = 'black';

function createGrid(size) {
    const container = document.querySelector('.container')
    container.textContent = "";
    for (let i=0;i<size;i++){
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j=0;j<size;j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            // square.textContent = i*16+j;
            row.appendChild(square);
            square.addEventListener('mouseover', e => changeColor(e))
        }
        container.appendChild(row)
    }
}

function changeColor(e){
    let color =[];
    for (let i=0;i<3;i++){
        color.push(Math.random()*256)
    }

    if (document.querySelector('#rgb').checked) {
        e.target.style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`;
    }
    else {
        const input = document.querySelector('#inputColor')
        if (input.value) {inputColor = input.value.toLowerCase();}
        else {input.value = 'black'}
         e.target.style.backgroundColor = inputColor;
    }
}

const reset = document.querySelector('#reset');
reset.addEventListener('click',() => resetGrid());

function resetGrid(n) {
    let gridsize;
    if (n) {gridsize = n;}
    else {
        while (isNaN(gridsize)) {
            gridsize = prompt('How many pixels per dimension?')
        }
    }
    createGrid(gridsize)
}

resetGrid(16)
// backgroundColor();

