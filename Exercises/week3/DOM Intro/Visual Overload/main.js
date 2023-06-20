// console.log(document)

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomColor = function() {
  const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"];
  const randomPosition = Math.floor(Math.random() * niceColors.length);
  return niceColors[randomPosition];
}

const addOnMouseOver = function(box) {
  box.style.backgroundColor = getRandomColor();
  addRectangle();
};

const addRectangle = function() {
  const container = document.getElementById("container");
  const box = document.createElement("div");
  box.style.backgroundColor = getRandomColor();
  box.style.width = getRandomIntInclusive(100, 300) + "px";
  box.style.height = getRandomIntInclusive(100, 300) + "px";
  box.style.position = "absolute";
  let height = parseInt(box.style.height, 10);
  let width = parseInt(box.style.width, 10);
  box.style.top = getRandomIntInclusive(height, window.innerHeight) - height + "px";
  box.style.left = getRandomIntInclusive(width, window.innerWidth) - width + "px";
  box.onmouseover = function() {
    addOnMouseOver(box);
  };
  container.appendChild(box);
};

addRectangle();





