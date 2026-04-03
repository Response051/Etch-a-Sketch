console.log("hello World");

// this grabs the div Id and button from the html file
const container = document.querySelector("#container");
const button = document.querySelector("button");

// to get Random rgb color values.
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// This function is passed to the addEvent Listeners.
function gridSize(e) {
  e.preventDefault();
  // grabs the number from the user
  let number = prompt("Enter Your Number");
  // makes it into a number
  let NumberInput = parseInt(number);
  // conditions the grid to be outputted
  if (NumberInput > 100) {
    // displays the content on the container div
    container.textContent = "Error!";
  } else {
    // refreshes the html file to be empty
    container.innerHTML = "";
    NumberInput;
    const totalCells = NumberInput * NumberInput;
    // iterates through the loop and output as a grid
    for (let index = 1; index < totalCells; index++) {
      const SquaredDiv1 = document.createElement("div");
      SquaredDiv1.classList.add("div1");
      // called the GetRandomColor values to the Dom using MouseEnter
      //  and mouseleave via addEvent
      SquaredDiv1.addEventListener("mouseenter", () => {
        SquaredDiv1.style.backgroundColor = getRandomColor();
      });
      SquaredDiv1.addEventListener("mouseleave", () => {
        SquaredDiv1.style.backgroundColor = "white";
      });
      container.append(SquaredDiv1);
    }
  }
}

button.addEventListener("click", gridSize);

// the function to leave a pixelated color wasn't done, will effect it later