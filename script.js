for (i = 0; i < 256; i++) {
    const frame = document.querySelector("#frame");
    
    const etchSquare = document.createElement("div");
    etchSquare.classList.add("square");
    
    frame.appendChild(etchSquare);
}

const squares = document.querySelectorAll(".square")

squares.forEach(function(square) {
    square.addEventListener("mouseover", function colorchange() {
        square.style.backgroundColor = "orange";
    })
})


