const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = 1;
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
}
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mouseleave", stopPainting);