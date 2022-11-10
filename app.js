const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.fillRect(215 - 40, 200 - 30, 15, 100);
ctx.fillRect(350 - 40, 200 - 30, 15, 100);
ctx.fillRect(260 - 40, 200 - 30, 60, 200);

ctx.arc(250, 100, 50, 0, 2*Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(260 + 10, 80, 8, Math.PI, 2*Math.PI);
ctx.arc(220 + 10, 80, 8, Math.PI, 2*Math.PI);
ctx.fillStyle="white";
ctx.fill();

ctx.beginPath();
ctx.arc(265, 78, 4, 0, 2*Math.PI);
ctx.arc(225, 78, 4, 0, 2*Math.PI);
ctx.fillStyle="black";

ctx.fill();
// ctx.fillRect(200, 200, 50, 200);
// ctx.fillRect(400, 200, 50, 200);
// ctx.lineWidth=2;
// ctx.fillRect(300, 300, 50, 100);

// ctx.fillRect(200, 200, 200, 20);

// ctx.moveTo(200,200);
// ctx.lineTo(325,100);
// ctx.lineTo(450,200);
// ctx.fill();