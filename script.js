
let color = 'black';
let grid = document.querySelector(".container");
let click = false;


document.addEventListener("DOMContentLoaded", function() {
    makeGrid(16);
    document.querySelector("body").addEventListener("click", (e) => {
        if(e.target.tagName != "BUTTON") {
            click = !click
        }
    });
    console.log(document.querySelector("body").tagName)
})

function makeGrid(size) {
    let grid = document.querySelector(".container");

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    let numDivs = size * size

    for(let i = 0; i < numDivs; i++) {

        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv)
        grid.insertAdjacentElement("beforeend", div)

    }
}


function colorDiv() {
    if(click){
        if(color == `random`) {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }
        else{
            this.style.backgroundColor = `black`;
        }
    }
}

function setColor(colorChoice) {
    color = colorChoice;
}

function clearD() {
    let divs = document.querySelectorAll("div")

    divs.forEach((div) => {
        div.style.backgroundColor = "white"
    })
}
