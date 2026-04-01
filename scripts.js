console.log("hello World");

const container = document.querySelector("#container");
// const gridSize = prompt('enter your Number',  );
const totalCells = gridSize * gridSize;

for (let index = 1; index < totalCells; index++) {
  const SquaredDiv1 = document.createElement("div");
  SquaredDiv1.classList.add("div1");
  container.append(SquaredDiv1);
}
