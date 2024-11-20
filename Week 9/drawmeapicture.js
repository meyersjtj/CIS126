let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

function draw() {
    // Draw lines in from each corner
    ctx.moveTo(0, 0);
    ctx.lineTo(50, 50);
    ctx.stroke();
    ctx.moveTo(500, 0);
    ctx.lineTo(450, 50);
    ctx.stroke();
    ctx.moveTo(0, 500);
    ctx.lineTo(50, 450);
    ctx.stroke();
    ctx.moveTo(500, 500);
    ctx.lineTo(450, 450);
    ctx.stroke();

    // Draw a square
    ctx.fillStyle = "red";
    ctx.fillRect(50, 50, 400, 400);

    // Draw a circle
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(250, 250, 200, 0, 2 * Math.PI);
    ctx.fill();

    // Draw a triangle
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.moveTo(250, 50);
    ctx.lineTo(450, 450);
    ctx.lineTo(50, 450);
    ctx.fill();
    

}

window.addEventListener("load", draw);