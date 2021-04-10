/* req 2 + 3 + 12 */
function randomColor() {
  const randomColor1 = Math.floor(Math.random() * 255);
  const randomColor2 = Math.floor(Math.random() * 255);
  const randomColor3 = Math.floor(Math.random() * 255);
  let msg = `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`;

  if (msg === 'rgb(255, 255, 255)' || msg === 'rgb(0, 0, 0)') {
    msg = `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`;
  }

  return msg;
}

function colorOptions() {
  const color = document.getElementsByClassName('color');
  color[0].style.backgroundColor = 'black';
  color[1].style.backgroundColor = randomColor();
  color[2].style.backgroundColor = randomColor();
  color[3].style.backgroundColor = randomColor();

  for (let i = 0; i < color.length; i += 1) {
    let j = 1;
    if (color[i].style.backgroundColor === color[j].style.backgroundColor) {
      color[i].style.backgroundColor = randomColor();
    }
    j += 1;
  }
}

/* req 8 */
function colorPixel() {
  const pixelCell = document.getElementsByClassName('pixel');

  for (let i = 0; i < pixelCell.length; i += 1) {
    pixelCell[i].addEventListener('click', () => {
      const selectedColor = document.querySelector('.selected');
      pixelCell[i].style.backgroundColor = selectedColor.style.backgroundColor;
    });
  }
}

/* req 4 + 10 + 11 */
const pixelTable = document.getElementById('pixel-board');
const input = document.getElementById('board-size');

function createBoard(size) {
  for (let i = 0; i < size; i += 1) {
    const pixelRow = document.createElement('div');
    pixelRow.className = 'pixel-row';
    pixelTable.appendChild(pixelRow);

    for (let j = 0; j < size; j += 1) {
      const pixelCell = document.createElement('div');
      pixelCell.className = 'pixel';
      pixelRow.appendChild(pixelCell);
      pixelCell.style.backgroundColor = 'white';
    }
  }
}

function validateBoardSize() {
  if (input.value < 5) {
    input.value = 5;
  } else if (input.value > 50) {
    input.value = 50;
  }
  pixelTable.innerHTML = '';
  createBoard(input.value);
  colorPixel();
}

function inputBoardButton() {
  const button = document.getElementById('generate-board');

  button.addEventListener('click', () => {
    if (input.value.length === 0) {
      alert('Board inválido!');
    } else {
      validateBoardSize();
    }
  });
}

function inputBoardEnter() {
  input.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      if (input.value.length === 0) {
        alert('Board inválido!');
      } else {
        validateBoardSize();
      }
    }
  });
}

function createInputBoard() {
  inputBoardButton();
  inputBoardEnter();
}

/* req 6 + 7 */
function colorReset() {
  const color = document.getElementsByClassName('color');

  for (let i = 0; i < color.length; i += 1) {
    color[i].className = 'color';
  }
}
function colorSelect() {
  const color = document.getElementsByClassName('color');
  color[0].classList.add('selected');

  for (let i = 0; i < color.length; i += 1) {
    color[i].addEventListener('click', () => {
      colorReset();
      if (color[i].className !== 'color selected') {
        color[i].classList.add('selected');
      }
    });
  }
}

/* req 9 */
function clearButton() {
  const button = document.getElementById('clear-board');
  const pixelCell = document.getElementsByClassName('pixel');

  button.addEventListener('click', () => {
    for (let i = 0; i < pixelCell.length; i += 1) {
      pixelCell[i].style.backgroundColor = 'white';
    }
  });
}

window.onload = () => {
  colorOptions();
  createBoard(5);
  colorSelect();
  colorPixel();
  clearButton();
  createInputBoard();
};
