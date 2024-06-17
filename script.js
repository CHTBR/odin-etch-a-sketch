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

const colorList = ["white", "black", "red", "green", "blue", "orange", "yellow", "turquoise"];
for (let a = 0; a<2; a++) {
    const colorRow = document.createElement("div");
    colorRow.classList.add("color-row");
    for (let b = 0; b<4; b++) {
        const colorCell = document.createElement("button");
        colorCell.setAttribute("id", colorList[b+4*a]);
        colorCell.classList.add("color-cell");
        colorCell.classList.add(colorList[b+4*a]);
        colorRow.appendChild(colorCell);
    }
    colorGrid.appendChild(colorRow);
}
// IF a colorOption button is pressed
//  SET the value of cursorColor to the button id
colorGrid.addEventListener("click", event => {
    if (event.target.classList.item(0) === "color-cell") {
        cursorColor = event.target.id;
    }
});

/* GRID COLORING */
gridContainer.addEventListener("mouseover", event => {
    if (event.target.classList.item(0) === "grid-cell") {
        event.target.classList.replace(event.target.classList.item(1), cursorColor);
    }
});