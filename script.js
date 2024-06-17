/* GRID SIZE */
const gridContainer = document.querySelector("#sketch-grid-container");

function createGrid(gridSize) {
    while (gridContainer.firstChild) {
        gridContainer.firstChild.remove();
    }
    for (let a=0; a<gridSize; a++) {
        const gridCellRow = document.createElement("div");
        gridCellRow.classList.add("grid-cell-row");
        for (let b=0; b<gridSize; b++) {
            const gridCell = document.createElement("div");
            gridCell.classList.add("grid-cell");
            gridCell.classList.add("white");
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

/* CHANGING COLORS */
const colorGrid = document.getElementById("color-grid-container");
let cursorColor = "black";

// FOR every available color
//  INSTANTATE constant colorOption with the value of a new button element reference
//  ADD id equal to the current color ton colorOption
//  APPEND colorOption as a child of colorGrid

// IF a colorOption button is pressed
//  SET the value of cursorColor to the button id

/* GRID COLORING */
gridContainer.addEventListener("mouseover", event => {
    console.log("onmouseover FIRED!")
    if (event.target.classList.item(0) === "grid-cell") {
        event.target.classList.replace(event.target.classList.item(1), cursorColor);
    }
});