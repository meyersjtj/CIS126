let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

var window_height = window.innerHeight;
var window_width = window.innerWidth;

canvas.width = window_width;
canvas.height = window_height;

canvas.style.backgroundColor = '#ff8';

class Circle {
    constructor(xpos, ypos, radius, color) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.color = color;
    }

    draw(context) {
        context.beginPath();
        context.arc(this.xpos, this.ypos, this.radius, 0, 2 * Math.PI, false);
        context.fillStyle = this.color;
        context.stroke();
    }
}

let my_circle = new Circle(100, 100, 50, 'black');

my_circle.draw(context);