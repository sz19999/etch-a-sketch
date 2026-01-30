// create html handles
const canvas = document.querySelector("#canvas");
const sizeButton = document.querySelector("#size-button");

// create a default 16x16 canvas
let sideLength = 16;
for (let i = 0; i < sideLength; i++) {
    const div = document.createElement("div");
    canvas.appendChild(div);
}

// canvas mouse hover


// size button event handler
sizeButton.addEventListener("click", (sideLength) => {
    do {
        sideLength = prompt("Enter canvas side length (1-100): ");
        if (sideLength < 1 || sideLength > 100) {
            alert("Please enter a side length within bounds!");
        }
    } while (sideLength < 1 || sideLength > 100);
});