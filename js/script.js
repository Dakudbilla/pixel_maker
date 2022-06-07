const canvas = document.querySelector("#canvas");
const canvasHeight = document.querySelector("#canvas_height");
const canvasWidth = document.querySelector("#canvas_width");
const colorPicker = document.querySelector("#color_picker");
const submitCanvas = document.querySelector("#submit_canvas");
let canvasCellCOlor;
const initColor = "#fef";

//Gets the height and width entered by user
const getUserCanvasValues = () => {
  const height = Number(canvasHeight.value);
  const width = Number(canvasWidth.value);
  return { height, width };
};

//Get the current color picked by user
const getUserColor = () => {
  return colorPicker.value;
};

//Create a canvas using height and width entered by user
const createEmptyCanvas = (height, width) => {
  for (let i = 0; i < height; i++) {
    const canvasRow = document.createElement("tr");
    for (let j = 0; j < width; j++) {
      const canvasCell = document.createElement("td");
      canvasCell.setAttribute("id", `cell${i}${j}`);
      canvasCell.style.backgroundColor = initColor;
      canvasCell.addEventListener("click", () => {
        canvasCell.style.backgroundColor = canvasCellCOlor;
      });
      canvasRow.appendChild(canvasCell);
    }
    canvas.appendChild(canvasRow);
  }
};

//Checks canvas to determine if part of it is colored
const checkIfColored = (height, width) => {
  if (canvas.children.length === 0) {
    return false;
  }
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (
        document.querySelector(`#cell${i}${j}`).style.backgroundColor !==
        initColor
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
};

// Entry into the script
const main = () => {
  
  if (submitCanvas) {
    submitCanvas.addEventListener("click", () => {
      const { height, width } = getUserCanvasValues();
      if (checkIfColored(canvas)) {
        createEmptyCanvas(height, width);
      }
      canvas.replaceChildren();
      createEmptyCanvas(height, width);
      canvasCellCOlor = getUserColor();
    });
  }

  colorPicker.addEventListener("input", () => {
    canvasCellCOlor = getUserColor();
  });
};

main();
