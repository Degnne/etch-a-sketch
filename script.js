let brushColor = "#000000";
const backgroundColor = "#ffffff";
let canvasSize = 16;
const canvasContainerElement =  document.querySelector(".canvas-container");

// Add event listeners to buttons
const eraserButton = document.querySelector("#eraser");
eraserButton.addEventListener("click", () => changeBrushColor(backgroundColor));
const clearCanvasButton = document.querySelector("#clear-canvas");
clearCanvasButton.addEventListener("click", () => clearCanvas());

function createCanvas() {
    deleteCanvas();
    const canvasElement = document.createElement("div");
    canvasElement.id = "canvas";
    canvasContainerElement.appendChild(canvasElement);
    for(let i = 0; i < canvasSize; i++) {
        //create a row of pixels
        const newRow = document.createElement("div");
        newRow.classList.add("canvas-row");
        for(let j = 0; j < canvasSize; j++) {
            const newPixel = document.createElement("div");
            newPixel.classList.add("pixel");
            newPixel.addEventListener("mouseenter", () => {changePixelColor(newPixel, brushColor)});
            newRow.appendChild(newPixel);
        }
        canvasElement.appendChild(newRow);
    }
}

function deleteCanvas() {
    //remove divs from canvas
}

function clearCanvas() {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel =>
        changePixelColor(pixel, backgroundColor)
    );
}

function changePixelColor(pixel, color) {
    pixel.style.backgroundColor = color;
}

function changeBrushColor(color) {
    brushColor = color;
}

createCanvas();