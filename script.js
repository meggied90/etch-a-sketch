let slider = document.getElementById("squarecount");
let perRow = slider.value;
let totalSquares = Math.pow(perRow, 2)
let side = (1 / perRow)*100 + "%"
let slideroutput =   document.getElementById("slidernumber");
slideroutput.innerHTML = perRow

slider.oninput = function () {
    slideroutput.innerHTML = this.value
}

let squares = document.querySelectorAll(".square")

function drawSquares() {
    for (i = 0; i < totalSquares; i++) {
        const frame = document.querySelector("#frame");
        
        const etchSquare = document.createElement("div");
        etchSquare.classList.add("square");
        
        frame.appendChild(etchSquare);
    };
};

let squarecolor = document.getElementById("squarecolor")
console.log(squarecolor.value)

function redefineSquares() {
    let squares = document.querySelectorAll(".square")
    squares.forEach(function (square) {
        square.style.height = side;
        square.style.width = side;
    });

    squares.forEach(function(square) {
        square.addEventListener("mouseover", function colorchange() {
            square.style.backgroundColor = squarecolor.value;
        })
    })
}

drawSquares();
redefineSquares();

function removeSquares() {
    for (i = 0; i < totalSquares; i++) {
        let square = document.querySelector(".square");
        square.parentElement.removeChild(square)
    };
};

document.getElementById("reset").onclick = () => {
    removeSquares();
    perRow = slider.value;
    totalSquares = Math.pow(perRow, 2);
    side = (1 / perRow)*100 + "%";
    drawSquares();
    redefineSquares();
}

