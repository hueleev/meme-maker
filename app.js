const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.fillRect(50, 50, 100, 100);
ctx.rect(200, 50, 100, 100);
ctx.rect(300, 150, 100, 100);
ctx.fill();

ctx.beginPath(); //새로운 path를 그리지 않으면 아래 스타일이 적용됨 
ctx.rect(400, 250, 100, 100);
ctx.rect(500, 350, 100, 100);
ctx.fillStyle = "red";
setTimeout(()=> {ctx.fill();}, 1000);