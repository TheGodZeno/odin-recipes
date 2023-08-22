const gridContainer = document.getElementById('gridContainer');

function createGrid(rows, cols) {
    for (let i = 0; i < rows * cols; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);
    }
}

createGrid(16, 16);
