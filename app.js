const textInput = document.getElementById("text");
const fileInput = document.getElementById("file");
const modeBtn = document.getElementById("mode-btn");
const destroyBtn = document.getElementById("destroy-btn");
const eraserBtn = document.getElementById("eraser-btn");
const colorOptions = Array.from(document.getElementsByClassName("color-option"));
const lineWidth = document.getElementById("line-width");
const color = document.getElementById("color");

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round";
let isPainting = false;
let isFilling = false;

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
function onModeClick() {
  if (isFilling) {
    isFilling = false
    modeBtn.innerText = "Fill";
  } else {
    isFilling = true;
    modeBtn.innerText = "Draw";
  }
}
function onCanvasClick() {
  if (isFilling) {
    ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
  }
}
function onDestroyClick() {
  ctx.fillStyle = "white";
  ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
}
function onEraserClick() {
  ctx.strokeStyle = "white";
  isFilling = false;
  modeBtn.innerText = "Fill";
}
function onFileChange(event) {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  const image = new Image();
  image.src = url;
  image.onload = function() {
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH/1.5, CANVAS_HEIGHT/1.5);
    fileInput.value = null;
  }
}
function onDoubleClick(event) {
  
  const text = textInput.value;
  if (text !== "") {
    ctx.save(); // ctx의 현재 상태, 색상, 스타일등 모든것을 저장한다.
    const {offsetX, offsetY} = event;
    ctx.lineWidth = 1;
    ctx.font = "48px serif";
    ctx.fillText(text, offsetX, offsetY);
    ctx.restore(); // 이전 저장 상태로 돌아간다.
  }
}
// canvas.onmousemove = onMove();
canvas.addEventListener("dblclick", onDoubleClick);
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mouseleave", stopPainting);
canvas.addEventListener("click", onCanvasClick);
lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);

colorOptions.forEach(color => {
  color.addEventListener("click", onColorClick);
});

modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click", onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);
fileInput.addEventListener("change", onFileChange);