let colors = ["black", "red", "orange", "yellow", "green", "blue", "purple"];

let brushColor = "#000000";
const backgroundColor = "#ffffff";
let canvasSize = 32;
let isRainbow = false;
let isEraser = false;
const canvasContainerElement =  document.querySelector(".canvas-container");

// Add event listeners to buttons
const rainbowButton = document.querySelector("#rainbow");
rainbowButton.addEventListener("click", () => toggleRainbow());
const eraserButton = document.querySelector("#eraser");
eraserButton.addEventListener("click", () => toggleEraser());
const clearCanvasButton = document.querySelector("#clear-canvas");
clearCanvasButton.addEventListener("click", () => clearCanvas());

const panelButtons = document.querySelectorAll(".panel-button");
panelButtons.forEach(function(button) {
    button.addEventListener("mouseenter", () => button.classList.add("button-hover"));
    button.addEventListener("mouseleave", () => button.classList.remove("button-hover"));
});

// Color buttons
colors.forEach(function(color) {
    createColorButton(color);
});

// Canvas Size Slider
const canvasSlider = document.querySelector("#canvas-slider");
const canvasSizeDisplay = document.querySelector("#canvas-size");
canvasSizeDisplay.innerHTML = canvasSize;
canvasSlider.addEventListener("input", () => { canvasSizeDisplay.innerHTML = canvasSlider.value; });
canvasSlider.addEventListener("change", () => { changeCanvasSize(canvasSlider.value); });

function createColorButton(color) {
    const colorButton = document.querySelector("#" + color + "-button");
    colorButton.style.backgroundColor = color;
    colorButton.addEventListener("click", () => selectColorButton(color));
    colorButton.addEventListener("mouseenter", () => colorButton.classList.add("color-button-active"));
    colorButton.addEventListener("mouseleave", () => colorButton.classList.remove("color-button-active"));
}

function selectColorButton(color) {
    const colorButtons = document.querySelectorAll(".color-button");
    colorButtons.forEach(function(colorButton) {
        if(colorButton.id === (color + "-button")) {
            colorButton.classList.add("color-button-selected");
        } else {
            colorButton.classList.remove("color-button-selected");
        }
    });
    changeBrushColor(color);
    removeEraser();
    removeRainbow();
}

function changeCanvasSize(size) {
    deleteCanvas();
    canvasSize = size;
    console.log(canvasSize);
    createCanvas();
}

function createCanvas() {
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
    let canvasElement = document.querySelector("#canvas");
    console.log(canvasElement);
    canvasElement.remove();
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
    if (isEraser) {
        return backgroundColor;
    }
    else if (isRainbow) {
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
    selectColorButton();
    if (!isRainbow) {
        rainbowButton.classList.add("button-selected");
        isRainbow = true;
    } else {
        removeRainbow();
    }   
}

function toggleEraser() {
    selectColorButton();
    if (!isEraser) {
        eraserButton.classList.add("button-selected");
        isEraser = true;
    } else {
        removeEraser();
    }
}

function removeRainbow() {
    rainbowButton.classList.remove("button-selected");
    isRainbow = false;
}

function removeEraser() {
    eraserButton.classList.remove("button-selected");
    isEraser = false;
}

createCanvas();
selectColorButton("black");