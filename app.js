const colorOptions = Array.from(document.getElementsByClassName("color-option"));
const lineWidth = document.getElementById("line-width");
const color = document.getElementById("color");

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;

let isPainting = false;

function onMove(event) {
  const {offsetX, offsetY} = event;
  if (isPainting) {
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(offsetX, offsetY);
}
function startPainting() {
  isPainting = true;
}
function stopPainting() {
  isPainting = false;
  ctx.beginPath();
}
function onLineWidthChange(event) {
  ctx.lineWidth = event.target.value;
  
}
function onColorChange(event) {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}
function onColorClick(event) {
  const {color: colorValue} = event.target.dataset; 
  // console.dir(event.target.dataset.color);
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  color.value = colorValue;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mouseleave", stopPainting);

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);

colorOptions.forEach(color => {
  color.addEventListener("click", onColorClick);
});
console.log(colorOptions);