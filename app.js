const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

// 좌표 이동 
ctx.moveTo(50, 50); 
// 현재 좌표~ lineTo 좌표까지 line
ctx.lineTo(150, 50); 
ctx.lineTo(150, 150);  
ctx.lineTo(50, 150);  
ctx.lineTo(50, 50);  
// 그리기
ctx.fill();
// ctx.stroke(); 