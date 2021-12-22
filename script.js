let brushColor = "#000000";
const backgroundColor = "#ffffff";
let canvasSize = 32;
let isRainbow = false;
const canvasContainerElement =  document.querySelector(".canvas-container");

// Add event listeners to buttons
const rainbowButton = document.querySelector("#rainbow");
rainbowButton.addEventListener("click", () => toggleRainbow());
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
            newPixel.addEventListener("mouseenter", () => {changePixelColor(newPixel, getBrushColor())});
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

function getBrushColor() {
    if (isRainbow) {
        return getRandomColor();
    }
    else {
        return brushColor;
    }
}

function getRandomColor() {
    let color = "#";
    for (let i = 1; i <= 6; i++) {
        let randomNumber = getRandomInt(16);
        switch(randomNumber) {
            case 10: color += "a"; break;
            case 11: color += "b"; break;
            case 12: color += "c"; break;
            case 13: color += "d"; break;
            case 14: color += "e"; break;
            case 15: color += "f"; break;
            default: color += randomNumber;
        }
    }
    return color;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function toggleRainbow() {
    isRainbow = !isRainbow;
}

createCanvas();