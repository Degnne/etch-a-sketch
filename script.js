let drawColor = "#000000";
let canvasSize = 16;
const canvasElement =  document.getElementById("canvas");

function createCanvas() {
    deleteCanvas();
    for(let i = 0; i < canvasSize; i++) {
        for(let j = 0; j < canvasSize; j++) {
            //const pixel = document.createElement("div");
            //pixel.className = "pixel";
            //canvasElement.appendChild(pixel);
        }
    }
}

function deleteCanvas() {
    //remove divs from canvas
}

function clearCanvas() {
    //set all divs in canvas to white
}

function changePixelColor() {

}

createCanvas();