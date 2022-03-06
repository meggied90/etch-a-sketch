let perRow = 16
let totalSquares = Math.pow(perRow, 2)
let side = (1 / perRow)*100 + "%"
let squares = document.querySelectorAll(".square")

function drawSquares() {
    for (i = 0; i < totalSquares; i++) {
        const frame = document.querySelector("#frame");
        
        const etchSquare = document.createElement("div");
        etchSquare.classList.add("square");
        
        frame.appendChild(etchSquare);
    };
};

function redefineSquares() {
    let squares = document.querySelectorAll(".square")
    squares.forEach(function (square) {
        square.style.height = side;
        square.style.width = side;
    });

    squares.forEach(function(square) {
        square.addEventListener("mouseover", function colorchange() {
            square.style.backgroundColor = "orange";
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
    input = prompt("How many squares per row do you want?");
    while (input > 100) {
        input = prompt("I'm sorry, that will overwhelm the computer. Please \
        don't go over 100. How many squares per row do you want?");
    }
    perRow = input;

    totalSquares = Math.pow(perRow, 2);
    side = (1 / perRow)*100 + "%";
    drawSquares();
    redefineSquares();
}

