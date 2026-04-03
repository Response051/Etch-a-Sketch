console.log("hello World");

const container = document.querySelector("#container");
const button = document.querySelector("button");

function gridSize(e) {
  e.preventDefault();
    let number = prompt("Enter Your Number");
    let NumberInput = parseInt(number);
    if (NumberInput > 100) {
      container.textContent = "Error!";
    } else {
      NumberInput;
      const totalCells = NumberInput * NumberInput;

      for (let index = 1; index < totalCells; index++) {
        const SquaredDiv1 = document.createElement("div");
        SquaredDiv1.classList.add("div1");
        container.append(SquaredDiv1);
      }
    }
  };

button.addEventListener("click", gridSize);
