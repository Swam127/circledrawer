var canvas = document.getElementById("myCanvas");

var ctx = canvas.getContext("2d");

color = "red";

ctx.beginPath(); 
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", myMousedown);

function myMousedown(e) {
    color = document.getElementById("colorBox").value;
var mouseX = e.clientX-canvas.offsetLeft;
var mouseY = e.clientY-canvas.offsetTop;
circle (mouseX, mouseY);
}

function circle(x, y) {
    ctx.beginPath(); 
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(x, y, 40, 0, 2*Math.PI);
    ctx.stroke();
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}