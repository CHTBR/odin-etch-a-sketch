/* GRID SIZE */
const gridContainer = document.querySelector("#sketch-grid-container");

function createGrid(gridSize) {
    for (let a = 1; a<gridSize; a++) {
        const gridCellRow = document.createElement("div");
        gridCellRow.classList.add("grid-cell-row");
        for (let b=1; b<gridSize; b++) {
            const gridCell = document.createElement("div");
            gridCell.classList.add("grid-cell");
            gridCell.setAttribute("id", String(a) + String(b));
            gridCellRow.appendChild(gridCell);
        }
        gridContainer.appendChild(gridCellRow);
    }
}

createGrid(16);

const sizeInput = document.getElementById("grid-size-input");
sizeInput.value = 0;
sizeInput.addEventListener("input", () => {
    if (+sizeInput.value > 100) {
        sizeInput.value = 100;
    } else {
        sizeInput.value = Math.abs(Math.floor(sizeInput.value));
        if (sizeInput.value > 0) {
            createGrid(sizeInput.value);
        }
    }
});

//   INVOKE createGrid with the argument value


/* GRID COLORING */
// IF mouse cursor is over a cell
//  CHANGE the class of the cell to the name of the currently selected color


/* CHANGING COLORS */
// INSTANTIATE a variable cursorColor with a value of "black"
// INSTANTIATE a constant colorGrid with a reference to the div element with id "color-grid"

// FOR evry available color
//  INSTANTATE constant colorOption with the value of a new button element reference
//  ADD id equal to the current color ton colorOption
//  APPEND colorOption as a child of colorGrid

// IF a colorOption button is pressed
//  SET the value of cursorColor to the button id