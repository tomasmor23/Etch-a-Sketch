document.addEventListener("DOMContentLoaded", function() {

    makeGrid(50);

    document.querySelector("body").addEventListener("click", (e) => {
        if(e.target.tagName != "BUTTON") {            
            console.log(e.target.tagName)
            click = !click
        }
    })
    
})

const body = document.querySelector("body");
const startBtn = document.querySelector("#startBtn");
const clearBtn = document.querySelector("#clearBtn");
let click = false;



function makeGrid(size) {
    const container = document.createElement("div");
    container.classList.add("container");
    body.appendChild(container);

    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
    
        for (let j = 0; j < size; j++) {   
            const square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        }
    }
}



function startDrawing() {

    const squares = document.querySelectorAll(".square");
    if(click){
        squares.forEach((square) => {
            square.addEventListener("mouseover", () => square.style.backgroundColor = "black");
        });
    }
    
}

function clearDrawing() {

    const squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.style.backgroundColor = "white";
    });
}

function randomDrawing() {

    const squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        })
    })
}