const DIV_SIZE = 10; // 10px

// create html handles
const canvas = document.querySelector("#canvas");
const sizeButton = document.querySelector("#size-button");

// create a default 16x16 canvas
createCanvas(canvas);

// size button event handler
sizeButton.addEventListener("click", () => {
    // delete old canvas first
    canvas.innerHTML = "";

    // get canvas' side length from user
    let sideLength = 0;
    do {
        sideLength = +prompt("Enter canvas side length (1-55): ");
        canvas.style.width = `${sideLength * DIV_SIZE}px`;
        canvas.style.height = `${sideLength * DIV_SIZE}px`;

        if (sideLength < 1 || sideLength > 55) {
            alert("Please enter a side length within bounds!");
        }
    } while (sideLength < 1 || sideLength > 55);

    // create new canvas
    createCanvas(canvas, sideLength);
});

// a function that gets a parent handler (canvas) and a length of its side.
// then fills the parent with (sideLength * sideLength) div elements.
// creates a default 16x16 canvas if side length is not provided.
function createCanvas(parentElement, sideLength = 16) {
    for (let i = 0; i < sideLength; i++) {
        for (let j = 0; j < sideLength; j++) {
            const div = document.createElement("div");
            div.addEventListener("mouseenter", divHover);
            parentElement.appendChild(div);
        }
}
parentElement.style.width = `${sideLength * DIV_SIZE}px`;
parentElement.style.height = `${sideLength * DIV_SIZE}px`;
}

// div mouse hover logic
function divHover(event) {
    // choose a random rgb() color for the hovered div
    event.target.style.backgroundColor = randColor();

    // each div hover darkens the div by 10%, until full colored
    event.target.style.opacity = (event.target.style.opacity == "") ? 
        "0.1" : `${+event.target.style.opacity + 0.1}`;
}

// generate a random number from 0 to 255
function rand255() {
    return Math.floor(Math.random() * 256);
}

// generate a random rgb() color property
function randColor() {
    const red = rand255();
    const green = rand255();
    const blue = rand255();
    return `rgb(${red}, ${green}, ${blue})`;    // return "rgb(red, green, blue)"
} 