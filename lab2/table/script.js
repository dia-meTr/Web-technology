let lastRandomColor = "";
let isRandom = true;

function createTable() {
  let rows = 6;
  let cols = 6;
  let table = document.getElementById("changing-table");
  table.innerHTML = "";
  for (let i = 0; i < rows; i++) {
    var row = table.insertRow(i);
    for (let j = 0; j < cols; j++) row.insertCell(j);
  }
}

function printNumbers() {
  let rows = document.getElementById("changing-table").children[0].children;
  for (let i = 0; i < rows.length; i++) {
    let cols = rows[i].children;
    for (let j = 0; j < cols.length; j++) {
      let cell = cols[j];
      cell.innerHTML = `${i * 6 + j + 1}`;
      cell.addEventListener("mouseover", changeColorByHover);
      cell.addEventListener("mouseout", changeColorByUnhover);
      cell.addEventListener("click", changeColorByClick);
      cell.addEventListener("dblclick", changeColorByDbclick);
    }
  }
}

function changeColorByHover(e) {
  if (e.srcElement.innerHTML !== "7") {
    return;
  }

  this.style.background = getRandomRgbColor();
}

function changeColorByUnhover(e) {
  if (e.srcElement.innerHTML !== "7") {
    return;
  }

  if (this.style.background === lastRandomColor) {
    this.style.background = "white";
  }
}

function changeColorByClick(e) {
  if (e.srcElement.innerHTML !== "7") {
    return;
  }
  this.style.background = document.getElementById("palit").value;
}

function changeColorByDbclick() {
  const doubleClickedCell = this.innerHTML;

  const tds = document.querySelectorAll("td");
  const color = isRandom ? getRandomRgbColor() : "#FFFFFF";
  const list1 = [0, 1, 2, 3, 4, 5, 12, 13, 14, 15, 16, 17, 24, 25, 26, 27, 28, 29];
  const list2 = [6, 7, 8, 9, 10, 11, 18, 18, 19, 20, 21, 22, 23, 30, 31, 32, 32, 33, 34, 35]
  console.log
  flag = 0;
  id = 0;
  tds.forEach((td) => {
    if (td.innerHTML == doubleClickedCell) {
      if (list1.includes(id)){
        flag = 1;
      } else {
        flag = 2
      }
    }
    id = id + 1;
  });
  
  id = 0;

  tds.forEach((td) => {
    
    if (flag == 1 && list1.includes(id)){
      td.style.background = color;
    }

    if (flag == 2 && list2.includes(id)){
      td.style.background = color;
    }

    id = id + 1;
  });

  isRandom = !isRandom;
}

function getRandomRgbColor() {
  var o = Math.round,
    r = Math.random,
    s = 255;
  const color =
    "rgb(" + o(r() * s) + ", " + o(r() * s) + ", " + o(r() * s) + ")";
  lastRandomColor = color;

  return color;
}

createTable();
printNumbers();
